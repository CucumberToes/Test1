const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/submit-email', (req, res) => {
    const email = req.body.email;
    console.log('Received email:', email);
    // You can add code here to save the email to a database or perform other actions
    res.json({ message: 'Email received successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
