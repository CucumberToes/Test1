const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit-email', (req, res) => {
    const email = req.body.email;
    console.log('Received email:', email);
    res.json({ message: 'Email received successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
