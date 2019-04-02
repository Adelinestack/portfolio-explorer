var fs = require('fs');
const ContentUtils = require('./content.js');

jest.mock('fs');
describe('Test getContentByPath', () => {
  test('should return correct content with no folder and only image', () => {
    fs.readdirSync.mockImplementation(path => {
      if (path === '/test') {
        return [
          {
            isDirectory: () => false,
            name: 'img.png',
          },
          {
            isDirectory: () => false,
            name: 'img2.png',
          },
        ];
      }
    });
    expect(ContentUtils.getContentByPath('/test')).toEqual({
      allImages: [
        { name: 'img.png', path: '/test/img.png' },
        { name: 'img2.png', path: '/test/img2.png' },
      ],
      folders: [],
    });
  });

  test('should return correct content with folder', () => {
    fs.readdirSync.mockImplementation(path => {
      if (path === '/test') {
        return [
          {
            isDirectory: () => true,
            name: 'img',
          },
        ];
      }
      if (path === '/test/img') {
        return [
          {
            isDirectory: () => false,
            name: 'img.png',
          },
        ];
      }
    });
    expect(ContentUtils.getContentByPath('/test')).toEqual({
      allImages: [{ name: 'img.png', path: '/test/img/img.png' }],
      folders: [{ name: 'img', path: '/test/img' }],
    });
  });
});
