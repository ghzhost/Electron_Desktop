const { contextBridge, ipcRenderer } = require('electron');

// No need for IPC handlers since we're only loading verseweb.ghzhost.com
contextBridge.exposeInMainWorld('electronAPI', {
    onViewLoaded: (callback) => {
        ipcRenderer.on('view-loaded', (event) => callback(event));
    }
}); 