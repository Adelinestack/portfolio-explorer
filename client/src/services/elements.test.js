import mockAxios from 'jest-mock-axios';
import { getElement } from './elements';

describe('Test get element', () => {
  afterAll(() => {
    mockAxios.reset();
  });

  test('Should destructure axios response', async () => {
    mockAxios.get.mockResolvedValue({});
    const elements = await getElement('./images');
    expect(elements).toEqual({});
  });

  const elementPath = './images';
  test('Should call axios', async () => {
    await getElement(elementPath);
    expect(mockAxios.get).toHaveBeenCalledWith('/getImages', {
      params: { elementPath },
    });
  });
});
