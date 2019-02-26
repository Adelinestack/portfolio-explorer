const express = require('express');
const app = express();
const fs = require('fs');

app.use('/', express.static('../client/build/'));
app.use('/images', express.static('./img'));

const contentByPath = elementPath => {
  return fs.readdirSync(`./img${elementPath}`, { withFileTypes: true });
};

app.get('/images', (req, res) => {
  const elementPath = req.query.elementPath;
  const readElement = contentByPath(elementPath);
  const content = readElement.map(element => ({
    name: element.name,
    isDir: element.isDirectory(),
    elementPath: `/images${elementPath}${element.name}`,
  }));
  console.log(content);
  res.send(content);
});

const server = app.listen(4000, (req, res) => {
  console.log(`server started on ${server.address().port}`);
});
