<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Chat Simples</title>
<style>
  body { font-family: Arial; display: flex; gap: 20px; padding: 20px; background: #f4f4f4; }
  .box { background: white; padding: 10px; border-radius: 10px; width: 45%; box-shadow: 0 0 5px #ccc; }
  textarea { width: 100%; height: 150px; resize: none; margin-top: 10px; }
  .mensagem { background: #eef; padding: 10px; border-radius: 5px; min-height: 50px; }
</style>
</head>
<body>

<div class="box">
  <h2>Indivíduo 1</h2>
  <textarea id="input1" placeholder="Digite <!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Chat Criativo em Tempo Real (Simples)</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 40px;
  }
  .box {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 45%;
  }
  h2 {
    text-align: center;
    color: #333;
  }
  textarea {
    width: 100%;
    height: 200px;
    font-size: 16px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
</head>
<body>

<div class="box">
  <h2>Indivíduo 1</h2>
  <textarea id="input1" placeholder="Digite aqui..."></textarea>
</div>

<div class="box">
import { WebSocketServer } from 'ws';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Arquivo não encontrado');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN && client !== ws) {
        client.send(msg);
      }
    });
  });
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
