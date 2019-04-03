const express = require('express');
const app = express();
const { getContentByPath } = require('./utils/content');

app.get('/api/getImages', (req, res) => {
  const elementPath = req.query.elementPath.substring(1);
  const content = getContentByPath(`./img/${elementPath}`);
  res.json(content);
});

const server = app.listen(4000, (req, res) => {
  console.log(`server started on ${server.address().port}`);
});
