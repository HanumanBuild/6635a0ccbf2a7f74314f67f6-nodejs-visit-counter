const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT || 3000;

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  res.send(`<h1>Page has been visited ${visitCount} times</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});