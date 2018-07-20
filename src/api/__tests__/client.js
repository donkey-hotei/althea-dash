import client from '../client';
import MockAdapter from 'axios-mock-adapter';
const mockClient = new MockAdapter(client);

describe('axios client', () => {
  afterEach(mockClient.reset);
  afterAll(mockClient.restore);
  it('transforms request data to snake_case', () => {
    mockClient.onPut('/test', { test_param: 'testValue' }).reply(200);
    return client
      .put('/test', { testParam: 'testValue' })
      .then(response => expect(response.status).toBe(200));
  });
  it('transforms responses to camelCase', () => {
    mockClient
      .onGet('/test')
      .reply(
        200,
        { test_param: 'test_value' },
        { 'Content-Type': 'application/json' }
      );
    return client.get('/test').then(response => {
      expect(response.data).toEqual({ testParam: 'test_value' });
    });
  });
});

