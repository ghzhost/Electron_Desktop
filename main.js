const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let serverProcess;

function createWindow() {
    // Criar a janela do navegador
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            enableRemoteModule: false,
            webSecurity: true
        },
        icon: path.join(__dirname, 'files/custom-template/GHZVR-VERSEWEB.png'),
        show: false // Não mostrar até estar pronto
    });

    // Carregar a aplicação quando a janela estiver pronta
    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
        mainWindow.focus();
    });

    // Carregar a aplicação local
    mainWindow.loadURL('http://localhost:3000');

    // Abrir DevTools na inicialização
    // mainWindow.webContents.openDevTools();

    // Evento quando a janela é fechada
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // Evento para lidar com erros de carregamento
    mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('Falha ao carregar:', errorDescription);
        // Tentar recarregar após um delay
        setTimeout(() => {
            mainWindow.loadURL('http://localhost:3000');
        }, 2000);
    });
}

function startServer() {
    return new Promise((resolve, reject) => {
        console.log('Iniciando servidor VerseWEB...');
        
        serverProcess = spawn('node', ['server.js'], {
            stdio: 'pipe',
            cwd: __dirname
        });

        serverProcess.stdout.on('data', (data) => {
            const output = data.toString();
            console.log('Servidor:', output);
            
            // Verificar se o servidor está pronto
            if (output.includes('Servidor rodando em http://localhost:3000')) {
                console.log('Servidor iniciado com sucesso!');
                resolve();
            }
        });

        serverProcess.stderr.on('data', (data) => {
            console.error('Erro do servidor:', data.toString());
        });

        serverProcess.on('error', (error) => {
            console.error('Erro ao iniciar servidor:', error);
            reject(error);
        });

        serverProcess.on('close', (code) => {
            console.log(`Servidor encerrado com código: ${code}`);
        });

        // Timeout para evitar espera infinita
        setTimeout(() => {
            reject(new Error('Timeout ao iniciar servidor'));
        }, 10000);
    });
}

function createMenu() {
    const template = [
        {
            label: 'Arquivo',
            submenu: [
                {
                    label: 'Recarregar',
                    accelerator: 'CmdOrCtrl+R',
                    click: () => {
                        if (mainWindow) {
                            mainWindow.reload();
                        }
                    }
                },
                {
                    label: 'Forçar Recarregamento',
                    accelerator: 'CmdOrCtrl+Shift+R',
                    click: () => {
                        if (mainWindow) {
                            mainWindow.webContents.reloadIgnoringCache();
                        }
                    }
                },
                { type: 'separator' },
                {
                    label: 'Sair',
                    accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Desenvolvimento',
            submenu: [
                {
                    label: 'Abrir DevTools',
                    accelerator: 'F12',
                    click: () => {
                        if (mainWindow) {
                            mainWindow.webContents.toggleDevTools();
                        }
                    }
                },
                {
                    label: 'Alternar Tela Cheia',
                    accelerator: 'F11',
                    click: () => {
                        if (mainWindow) {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

// Este método será chamado quando o Electron terminar de inicializar
app.whenReady().then(async () => {
    try {
        await startServer();
        createWindow();
        createMenu();
    } catch (error) {
        console.error('Erro ao inicializar:', error);
        app.quit();
    }
});

// Quit quando todas as janelas estiverem fechadas
app.on('window-all-closed', () => {
    // No macOS é comum para aplicações manterem a barra de menu ativa
    // até que o usuário saia explicitamente com Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // No macOS é comum recriar uma janela na aplicação quando o
    // ícone do dock é clicado e não há outras janelas abertas
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// Encerrar o servidor quando a aplicação for fechada
app.on('before-quit', () => {
    if (serverProcess) {
        console.log('Encerrando servidor...');
        serverProcess.kill();
    }
});

// Tratamento de erros não capturados
process.on('uncaughtException', (error) => {
    console.error('Erro não capturado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Promise rejeitada não tratada:', reason);
}); 