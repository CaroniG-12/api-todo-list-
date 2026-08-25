import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('API Tarefas está online!');
});

app.listen(5010, () => {
  console.log('Servidor rodando na porta 3333');
});