const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Minha App na Nuvem - Vercel</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          h1 { font-size: 2.5em; }
          p { font-size: 1.2em; }
          .container {
            background: rgba(255,255,255,0.1);
            padding: 30px;
            border-radius: 15px;
            margin: 20px auto;
            max-width: 600px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 App no Vercel - FUNCIONANDO!</h1>
          <p><strong>Provedor:</strong> Vercel</p>
          <p><strong>Modelo:</strong> PaaS (Platform as a Service)</p>
          <p><strong>Computação:</strong> Nuvem Pública</p>
          <p><strong>Status:</strong> ✅ Deploy com Sucesso</p>
          <p><strong>URL:</strong> ${process.env.VERCEL_URL}</p>
          <p>Feito por: Luiz Gustavo de Oliveira Costa </p>
        </div>
      </body>
    </html>
  `);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'API funcionando no Vercel!' });
});

module.exports = app;
