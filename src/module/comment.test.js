import { JSDOM } from 'jsdom';
import { InvolvementApiClient } from './comments.js';

const dom = new JSDOM('<html><body><div id="msg"></div></body></html>');
global.document = dom.window.document;

describe('FetchComment testing', () => {
  it('should return 4', async () => {
    global.fetch = jest.fn();
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue([{}, {}, {}, {}].length),
    };
    global.fetch.mockResolvedValue(mockResponse);
    const apiClient = new InvolvementApiClient('#msg');
    const itemId = 'itmem_id';
    const successMsgSelector = '#msg';
    const data = await apiClient.fetchComments(itemId, successMsgSelector);
    expect(data).toBe(4);
  });
});
