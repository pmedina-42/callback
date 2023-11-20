const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

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
