const { app, BrowserWindow, BrowserView, session, Menu, globalShortcut } = require('electron');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

let mainWindow;
let splashWindow;
let currentView = null;

function logLauncherStart() {
    const logPath = path.join(__dirname, 'launcher_log.json');
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        event: 'launcher_start',
        version: app.getVersion(),
        platform: process.platform,
        arch: process.arch
    };

    let logs = [];
    try {
        if (fs.existsSync(logPath)) {
            const fileContent = fs.readFileSync(logPath, 'utf8');
            logs = JSON.parse(fileContent);
            if (!Array.isArray(logs)) logs = [];
        }
    } catch (error) {
        console.error('Erro ao ler arquivo de log:', error);
        logs = [];
    }

    logs.push(logEntry);

    try {
        fs.writeFileSync(logPath, JSON.stringify(logs, null, 2), 'utf8');
    } catch (error) {
        console.error('Erro ao escrever arquivo de log:', error);
    }
}

Menu.setApplicationMenu(null);

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
        show: false,
        fullscreen: true
    });

    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Content-Security-Policy': ["default-src 'self' 'unsafe-inline' 'unsafe-eval' https: http: data: blob:"]
            }
        });
    });

    mainWindow.loadFile('index.html');

    const view = new BrowserView({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webSecurity: false,
            allowRunningInsecureContent: true
        }
    });

    mainWindow.addBrowserView(view);
    currentView = view;

    const bounds = mainWindow.getBounds();
    view.setBounds({
        x: 0,
        y: 0,
        width: bounds.width,
        height: bounds.height
    });

    view.webContents.loadURL('https://verseweb.ghzhost.com');

    mainWindow.once('ready-to-show', () => {
        setTimeout(() => {
            splashWindow.destroy();
            mainWindow.setFullScreen(true);
            mainWindow.show();
        }, 2000);
    });

    mainWindow.on('resize', () => {
        if (currentView) {
            const bounds = mainWindow.getBounds();
            currentView.setBounds({
                x: 0,
                y: 0,
                width: bounds.width,
                height: bounds.height
            });
        }
    });

    globalShortcut.register('F11', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });

    globalShortcut.register('Alt+Enter', () => {
        mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });

    mainWindow.on('closed', () => {
        globalShortcut.unregisterAll();
    });

    view.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('view-loaded');
    });
}

app.whenReady().then(() => {
    logLauncherStart();
    createSplashWindow();
    createWindow();
});

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