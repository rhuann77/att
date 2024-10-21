const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'sua_chave_secreta';
const validUsername = 'usuario123';
const validPassword = 'senha123';

// Rota para login
app.post('/index.html', (req, res) => {
  const { username, password } = req.body;

  if (username === validUsername && password === validPassword) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Usuário ou senha incorretos' });
  }
});

// Rota para a raiz
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});