const express = require('express');
const app = express();
const { getContentByPath } = require('./utils/content');

app.use('/img', express.static('./img'));

app.get('/getImages', (req, res) => {
  const elementPath = req.query.elementPath.substring(1);
  const content = getContentByPath(`./img/${elementPath}`);
  res.json(content);
});

app.use('/*.js', express.static('../client/build/'));

const server = app.listen(4000, (req, res) => {
  console.log(`server started on ${server.address().port}`);
});
