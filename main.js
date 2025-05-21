const { app, BrowserWindow, ipcMain, dialog, session, BrowserView } = require('electron');
const path = require('path');
const { startServer } = require('./gemini-api');
require('dotenv').config();

let mainWindow;
let splashWindow;
let currentView = null;
let views = new Map();
let server;

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 800,
    height: 400,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  splashWindow.loadFile('splash.html');
  splashWindow.center();
}

async function createWindow() {
  // Inicia o servidor Express
  try {
    server = await startServer(3000);
  } catch (error) {
    console.error('Erro ao iniciar servidor:', error);
    app.quit();
    return;
  }

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false,
      allowRunningInsecureContent: true
    },
    frame: true,
    fullscreenable: true,
    show: false
  });

  // Configurar permissões de conteúdo
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["default-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: data: blob:"]
      }
    });
  });

  mainWindow.loadFile('index.html');

  // Quando a janela estiver pronta, maximizar e mostrar
  mainWindow.once('ready-to-show', () => {
    // Aguardar um pouco antes de fechar a splash screen e mostrar a janela principal
    setTimeout(() => {
      splashWindow.destroy();
      mainWindow.maximize();
      mainWindow.show();
    }, 2000); // 2 segundos de delay para mostrar a splash screen
  });

  // Adicionar listener para redimensionamento da janela
  mainWindow.on('resize', () => {
    setTimeout(updateViewBounds, 100);
  });

  mainWindow.on('maximize', () => {
    setTimeout(updateViewBounds, 100);
  });

  mainWindow.on('unmaximize', () => {
    setTimeout(updateViewBounds, 100);
  });

  // Check internet connection periodically
  setInterval(checkInternetConnection, 5000);
}

function updateViewBounds() {
  if (currentView) {
    const bounds = mainWindow.getBounds();
    const tabHeight = 60;
    const menuHeight = process.platform === 'darwin' ? 28 : 30;
    
    // Ajuste para garantir que o conteúdo fique dentro da área visível
    currentView.setBounds({
      x: 0,
      y: tabHeight,
      width: bounds.width,
      height: bounds.height - (tabHeight + menuHeight + 2) // +2 para margem de segurança
    });
  }
}

function createBrowserView(url) {
  const view = new BrowserView({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  });

  mainWindow.addBrowserView(view);
  
  const bounds = mainWindow.getBounds();
  const tabHeight = 60;
  const menuHeight = process.platform === 'darwin' ? 28 : 30;

  // Ajuste para garantir que o conteúdo fique dentro da área visível
  view.setBounds({
    x: 0,
    y: tabHeight,
    width: bounds.width,
    height: bounds.height - (tabHeight + menuHeight + 2) // +2 para margem de segurança
  });

  if (url.endsWith('.html')) {
    view.webContents.loadFile(url);
    view.webContents.setZoomFactor(1.0);
    
    view.webContents.on('dom-ready', () => {
      // Ajusta o zoom para garantir que todo o conteúdo seja visível
      view.webContents.setZoomFactor(1.0);
      
      view.webContents.insertCSS(`
        html, body {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        #app {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          position: relative !important;
          overflow: hidden !important;
        }
        .chat-container {
          flex: 1 1 auto !important;
          overflow-y: auto !important;
          padding-bottom: 80px !important;
          height: calc(100% - 60px) !important;
        }
        #messageInput {
          min-width: 100px !important;
          max-width: calc(100% - 100px) !important;
        }
      `);

      // Força recálculo do layout com um pequeno delay
      setTimeout(() => {
        view.webContents.invalidate();
      }, 100);
    });

    // Adiciona listener para ajustar o layout quando o conteúdo for carregado
    view.webContents.on('did-finish-load', () => {
      setTimeout(() => {
        view.webContents.invalidate();
        updateViewBounds();
      }, 100);
    });
  } else {
    view.webContents.loadURL(url);
  }

  view.webContents.on('page-title-updated', (event, title) => {
    mainWindow.webContents.send('title-update', title);
  });

  view.webContents.on('did-finish-load', () => {
    const title = view.webContents.getTitle();
    if (title) {
      mainWindow.webContents.send('title-update', title);
    }
    mainWindow.webContents.send('view-loaded');
  });

  return view;
}

function switchToView(view) {
  if (currentView) {
    mainWindow.removeBrowserView(currentView);
  }
  mainWindow.addBrowserView(view);
  currentView = view;
  updateViewBounds(); // Atualizar bounds ao trocar de view
  
  // Update title when switching views
  if (view.webContents.getTitle()) {
    mainWindow.webContents.send('title-update', view.webContents.getTitle());
  }
}

// IPC Handlers
ipcMain.handle('load-tab', async (event, url) => {
  if (views.has(url)) {
    switchToView(views.get(url));
  } else {
    const view = createBrowserView(url);
    views.set(url, view);
    switchToView(view);
  }
});

function checkInternetConnection() {
  const { net } = require('electron');
  const request = net.request('https://ghzhost.com');
  
  request.on('response', (response) => {
    const isOnline = response.statusCode === 200;
    mainWindow.webContents.send('internet-status', isOnline);
    if (!isOnline) {
      showNoInternetDialog();
    }
  });

  request.on('error', () => {
    mainWindow.webContents.send('internet-status', false);
    //showNoInternetDialog();
  });

  request.end();
}

function showNoInternetDialog() {
  dialog.showMessageBox(mainWindow, {
    type: 'warning',
    title: 'Sem Internet',
    message: 'Não foi possível conectar à internet. Por favor, verifique sua conexão.',
    buttons: ['OK']
  });
}

// IPC Handlers
ipcMain.handle('check-internet', async () => {
  return new Promise((resolve) => {
    const { net } = require('electron');
    const request = net.request('https://ghzhost.com');
    
    request.on('response', (response) => {
      resolve(response.statusCode === 200);
    });

    request.on('error', () => {
      resolve(false);
    });

    request.end();
  });
});

app.whenReady().then(() => {
  createSplashWindow();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (server) {
      server.close();
    }
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 