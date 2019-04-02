const fs = require('fs');
const _ = require('lodash');

const getAllImages = (folders, folderContent, path) => {
  const formattedPath = path.replace(/^\./, '');
  if (!folders.length) {
    return folderContent.map(({ name }) => ({
      path: `${formattedPath}/${name}`,
      name,
    }));
  }
  return folderContent.map(element => {
    if (element.isDirectory()) {
      const newFolderContent = fs.readdirSync(`${path}/${element.name}`, {
        withFileTypes: true,
      });
      const newFolders = newFolderContent
        .filter(element => element.isDirectory())
        .map(folder => ({
          name: folder.name,
          path: `${element.name}/${folder.name}`,
        }));

      return getAllImages(
        newFolders,
        newFolderContent,
        `${path}/${element.name}`
      );
    }
    return {
      path: `${formattedPath}/${element.name}`,
      name: element.name,
    };
  });
};

const getContentByPath = path => {
  const folderContent = fs.readdirSync(path, { withFileTypes: true });

  const completePath = path.replace(/^\.\/img\//g, '');
  const folders = folderContent
    .filter(element => element.isDirectory())
    .map(folder => ({
      name: folder.name,
      path: `${completePath}/${folder.name}`,
    }));

  const allImages = _.flattenDeep(getAllImages(folders, folderContent, path));
  return { folders, allImages };
};

module.exports = { getContentByPath, getAllImages };
