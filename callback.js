const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware para corregir el charset en Content-Type
app.use((req, res, next) => {
    if (req.headers['content-type']) {
        req.headers['content-type'] = req.headers['content-type'].replace('charset=utf8', 'charset=utf-8');
    }
    next();
});

app.use(bodyParser.json());

app.post('/callback', (req, res) => {
    console.log('Recibida solicitud post de callback:', req.body);
    res.status(201).send('Callback recibido con éxito');
});

app.get('/callback', (req, res) => {
    console.log('Recibida solicitud get de callback:', req.body);
    res.status(201).send('Callback recibido con éxito');
});

app.listen(PORT, () => {
    console.log('Servidor de callbacks en ejecución en el puerto 4000');
});
