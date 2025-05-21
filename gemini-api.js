require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const express = require('express');
const cors = require('cors');
const path = require('path');

// Verificação da chave da API
if (!process.env.GEMINI_API_KEY) {
    console.error('Erro: GEMINI_API_KEY não encontrada no arquivo .env');
    process.exit(1);
}

// Configuração da API do Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Configuração do chat com instruções do sistema
const SYSTEM_PROMPT = `Você é o assistente virtual oficial da GhzHost, especializado em:
- Suporte técnico para hospedagem de sites e servidores
- Manutenção e gerenciamento de servidores
- Configuração de serviços de hospedagem
- Resolução de problemas relacionados a hosting
- Recomendações sobre planos e serviços de hospedagem
- Boas práticas de segurança e performance em servidores

Mantenha suas respostas:
1. Profissionais e técnicas
2. Focadas em hospedagem e servidores
3. Alinhadas com os serviços da GhzHost
4. Precisas e diretas
5. Úteis para usuários técnicos e não técnicos

Se não souber algo específico sobre a GhzHost, mantenha a resposta genérica mas tecnicamente correta.`;

// Configuração do Express
const app = express();
app.use(cors());
app.use(express.json());

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Endpoint da API
app.post('/api/chat', async (req, res) => {
    try {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY não configurada');
        }

        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        // Iniciar chat com o system prompt
        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: "Por favor, confirme suas instruções e papel como assistente da GhzHost."
                },
                {
                    role: "model",
                    parts: SYSTEM_PROMPT
                }
            ],
            generationConfig: {
                maxOutputTokens: 1000,
            }
        });

        // Enviar a mensagem do usuário
        const result = await chat.sendMessage(message);
        const response = await result.response;
        res.json({ response: response.text() });
    } catch (error) {
        console.error('Erro ao gerar resposta:', error);
        res.status(500).json({ 
            error: 'Erro interno do servidor',
            details: error.message 
        });
    }
});

// Endpoint para verificar status
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online',
        apiKeyConfigured: !!process.env.GEMINI_API_KEY
    });
});

// Função para iniciar o servidor
function startServer(port = 3000) {
    return new Promise((resolve, reject) => {
        try {
            if (!process.env.GEMINI_API_KEY) {
                reject(new Error('GEMINI_API_KEY não configurada no arquivo .env'));
                return;
            }

            const server = app.listen(port, () => {
                console.log(`Servidor Gemini rodando na porta ${port}`);
                console.log('API Key configurada:', !!process.env.GEMINI_API_KEY);
                resolve(server);
            });
        } catch (error) {
            console.error('Erro ao iniciar servidor Gemini:', error);
            reject(error);
        }
    });
}

module.exports = {
    startServer
}; 
