const express = require('express'); // Importa o framework
const app = express();
const PORT = 3000;

// Middleware para processar JSON 
app.use(express.json());

// 1. Método GET: Solicitar dados
app.get('/usuarios', (req, res) => {
    res.json({ mensagem: "Lista de usuários recuperada com sucesso!" });
});

// 2. Método POST: Criar novos dados
app.post('/usuarios', (req, res) => {
    res.status(201).json({ mensagem: "Usuário criado com sucesso!" });
});

// 3. Método PUT: Atualizar dados (substituição completa)
app.put('/usuarios/1', (req, res) => {
    res.json({ mensagem: "Usuário 1 atualizado completamente!" });
});

// 4. Método PATCH: Atualizar dados (modificação parcial)
app.patch('/usuarios/1', (req, res) => {
    res.json({ mensagem: "Senha do usuário 1 alterada com sucesso!" });
});

// 5. Método DELETE: Remover dados
app.delete('/usuarios/1', (req, res) => {
    res.send("Usuário 1 removido do sistema.");
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));