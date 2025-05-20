const { app, BrowserWindow, ipcMain, dialog, session, BrowserView } = require('electron');
const path = require('path');

let mainWindow;
let currentView = null;
let views = new Map();

function createWindow() {
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
    mainWindow.maximize();
    mainWindow.show();
  });

  // Adicionar listener para redimensionamento da janela
  mainWindow.on('resize', updateViewBounds);
  mainWindow.on('maximize', updateViewBounds);
  mainWindow.on('unmaximize', updateViewBounds);

  // Check internet connection periodically
  setInterval(checkInternetConnection, 5000);
}

function updateViewBounds() {
  if (currentView) {
    const bounds = mainWindow.getBounds();
    const tabHeight = 60; // Altura aproximada da barra de abas
    currentView.setBounds({
      x: 0,
      y: tabHeight,
      width: bounds.width,
      height: bounds.height - tabHeight
    });
  }
}

function createBrowserView(url) {
  const view = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
      allowRunningInsecureContent: true
    }
  });

  mainWindow.addBrowserView(view);
  
  // Calcular as dimensões da view
  const bounds = mainWindow.getBounds();
  const tabHeight = 60; // Altura aproximada da barra de abas
  view.setBounds({
    x: 0,
    y: tabHeight,
    width: bounds.width,
    height: bounds.height - tabHeight
  });

  // Carregar a URL
  view.webContents.loadURL(url);

  // Listen for title updates
  view.webContents.on('page-title-updated', (event, title) => {
    mainWindow.webContents.send('title-update', title);
  });

  // Get title when page finishes loading
  view.webContents.on('did-finish-load', () => {
    const title = view.webContents.getTitle();
    if (title) {
      mainWindow.webContents.send('title-update', title);
    }
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

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); 