import axios from 'axios';

const getElementFromServer = async elementPath =>
  await axios.get(`/getImages`, {
    params: {
      elementPath,
    },
  });

export const getElement = async elementPath => {
  const content = await getElementFromServer(elementPath);
  return content;
};
