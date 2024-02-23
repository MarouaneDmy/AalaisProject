const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.json({ "users": ["UserOne", "UserTwo", "UserThree", "UserFour"] });
});

app.listen(3001, () => console.log('Server start on port 3001!'));