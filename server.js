const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const DB_PATH = path.join(__dirname, 'database.json');

app.use(cors());
app.use(express.json());

async function loadDatabase() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return { users: [] };
  }
}

async function saveDatabase(data) {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function generateToken() {
  return Array.from({ length: 32 }, () => Math.random().toString(36).charAt(2)).join('');
}

function getTokenFromHeader(req) {
  const auth = req.headers.authorization || '';
  return auth.startsWith('Bearer ') ? auth.slice(7) : null;
}

app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Preencha todos os campos.' });
  }

  const db = await loadDatabase();
  const existing = db.users.find(user => user.username === username || user.email === email);
  if (existing) {
    return res.status(400).json({ message: 'Usuário ou email já cadastrado.' });
  }

  const token = generateToken();
  const user = {
    username,
    email,
    password,
    token,
    createdAt: new Date().toISOString(),
    data: {
      transactions: [],
      invoices: [],
      budgetGoal: 0,
    },
  };
  db.users.push(user);
  await saveDatabase(db);
  res.json({ token, username });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuário e senha são obrigatórios.' });
  }

  const db = await loadDatabase();
  const user = db.users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
  }

  user.token = generateToken();
  await saveDatabase(db);
  res.json({ token: user.token, username: user.username });
});

app.get('/api/user', async (req, res) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({ message: 'Token não informado.' });
  }

  const db = await loadDatabase();
  const user = db.users.find(u => u.token === token);
  if (!user) {
    return res.status(401).json({ message: 'Token inválido.' });
  }

  res.json({ username: user.username });
});

app.get('/api/data', async (req, res) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({ message: 'Token não informado.' });
  }

  const db = await loadDatabase();
  const user = db.users.find(u => u.token === token);
  if (!user) {
    return res.status(401).json({ message: 'Token inválido.' });
  }

  /* Dados completos; filtro por startDate/endDate é feito no cliente (dashboard). */
  res.json(user.data);
});

app.post('/api/data', async (req, res) => {
  const token = getTokenFromHeader(req);
  if (!token) {
    return res.status(401).json({ message: 'Token não informado.' });
  }

  const { transactions, invoices, budgetGoal } = req.body;
  const db = await loadDatabase();
  const user = db.users.find(u => u.token === token);
  if (!user) {
    return res.status(401).json({ message: 'Token inválido.' });
  }

  user.data = {
    transactions: Array.isArray(transactions) ? transactions : user.data.transactions,
    invoices: Array.isArray(invoices) ? invoices : user.data.invoices,
    budgetGoal: typeof budgetGoal === 'number' ? budgetGoal : user.data.budgetGoal,
  };

  await saveDatabase(db);
  res.json({ success: true });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor FinanceFlow rodando em http://localhost:${PORT}`);
});
