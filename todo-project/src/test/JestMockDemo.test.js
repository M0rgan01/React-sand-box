import axios from 'axios';
import { Service } from '../services/Service';

const service = new Service();

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

jest.mock('axios', () => {
  return {
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };
});

describe('Mock axios', () => {

  beforeEach(() => {
    axios.mockClear();
  });

  it('Axios mock', async () => {
    axios.get.mockResolvedValue({data: [['coucou']]});
    expect(await service.fetchTodos()).toBe(['coucou']);
  });

});