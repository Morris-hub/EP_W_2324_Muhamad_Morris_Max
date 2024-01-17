const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Project Parksystem');
});


app.get('/index', (req, res) => {
    res.redirect('park1.html');
});
app.listen(port, () => console.log
(`App listening on http://localhost:${port}`));