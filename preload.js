const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    checkInternet: () => ipcRenderer.invoke('check-internet'),
    onInternetStatus: (callback) => {
        ipcRenderer.on('internet-status', (event, isOnline) => callback(event, isOnline));
    },
    loadTab: (url) => ipcRenderer.invoke('load-tab', url),
    onTitleUpdate: (callback) => {
        ipcRenderer.on('title-update', (event, title) => callback(event, title));
    },
    onViewLoaded: (callback) => {
        ipcRenderer.on('view-loaded', (event) => callback(event));
    }
}); 