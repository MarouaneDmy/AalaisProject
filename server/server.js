const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ "users": ["UserOne", "UserTwo", "UserThree"] });
});

app.listen(3000, () => console.log('Server start on port 3000!'));