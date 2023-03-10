const express = require('express');
const path = require('path');
const app = express();


const PORT = process.env.PORT || 9000
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.info(`Running app in production mode in port ${PORT}`)
});