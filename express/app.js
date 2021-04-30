const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  return res.json({ message: 'welcome' });
});

app.post('/', (req, res) => {
  return res.json({ username: req.body.username });
});

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
