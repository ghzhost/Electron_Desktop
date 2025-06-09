const express = require('express');
const path = require('path');
const { v2: webdav } = require('webdav-server');
const basicAuth = require('express-basic-auth');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Configuração do WebDAV
const webdavServer = new webdav.WebDAVServer({
    port: port,
    httpAuthentication: new webdav.HTTPBasicAuthentication('VerseWeb Realm', {
        'MyUser': 'MyPass' // Credenciais do WebDAV
    }),
    privilegeManager: new webdav.SimplePathPrivilegeManager()
});

// Configuração do sistema de arquivos
const rootPath = path.join(__dirname, 'files');
if (!fs.existsSync(rootPath)) {
    fs.mkdirSync(rootPath, { recursive: true });
}

// Adiciona o sistema de arquivos ao servidor WebDAV
webdavServer.setFileSystem('/', new webdav.PhysicalFileSystem(rootPath), (success) => {
    if (!success) {
        console.error('Erro ao configurar o sistema de arquivos WebDAV');
    }
});

// Middleware para autenticação básica
const authMiddleware = basicAuth({
    users: { 'MyUser': 'MyPass' },
    challenge: true,
    realm: 'VerseWeb Realm'
});

// Middleware para servir arquivos estáticos
app.use(express.static('./'));

// Rota WebDAV protegida
app.use('/webdav', authMiddleware, (req, res, next) => {
    webdavServer.executeRequest(req, res, next);
});

// Rota pública para arquivos
app.use('/files', express.static(path.join(__dirname, 'files')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Tratamento de erros 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`WebDAV disponível em http://localhost:${port}/webdav-files`);
    console.log(`Arquivos públicos disponíveis em http://localhost:${port}/files`);
});
