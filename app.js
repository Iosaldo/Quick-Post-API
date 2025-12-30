const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para processar JSON (Fundamentos de Back-End)
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.status(200).json({ message: "Bem-vindo à Quick-Post API!" });
});

// Banco de dados em memória
let messages = [
  { id: 1, text: "Bem-vindo à fundação de Software Engineering!" },
];

// Rota GET: Recuperar mensagens (HTTP Request)
app.get("/messages", (req, res) => {
  res.status(200).json(messages);
});

// Rota POST: Criar nova mensagem (Async/HTTP)
app.post("/messages", (req, res) => {
  const newMessage = {
    id: messages.length + 1,
    text: req.body.text,
  };
  messages.push(newMessage);
  res.status(201).send(newMessage);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.delete("/messages/:id", (req, res) => {
  const { id } = req.params;
  messages = messages.filter((msg) => msg.id !== parseInt(id));
  res.status(204).send();
});
