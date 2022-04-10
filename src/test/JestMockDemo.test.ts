import axiosInstance from '../plugins/axios';
import ReactQueryService from '../services/ReactQueryService';

describe('Test mock', () => {
  it('mock 1', () => {
    const mock = jest
      .fn()
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(1);

    expect(mock()).toBe(4);
    expect(mock()).toBe(2);
    expect(mock()).toBe(1);
    expect(mock()).toBeUndefined();
    expect(mock).toHaveBeenCalledTimes(4);
  });
});

describe('Mock axios', () => {
  it('Axios mock', async () => {
    const mock = jest.spyOn(axiosInstance, 'get');
    mock.mockImplementation(() => Promise.resolve(['coucou']));
    expect(await ReactQueryService.fetchTodos()).toStrictEqual(['coucou']);
  });
});
