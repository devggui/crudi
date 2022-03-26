const path = require('path');

const express = require('express');

const staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/login', (req, res) => {  
  res.json({ message: 'Login page!' })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
