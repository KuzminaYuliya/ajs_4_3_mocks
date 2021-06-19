import getLevel from '../app';
import httpGet from '../fetchData';

jest.mock('../fetchData');
beforeEach(() => {
  jest.resetAllMocks();
});
test('should call getLevel', () => {
  httpGet.mockReturnValue(JSON.stringify({}));
  const response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
});
