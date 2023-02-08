import {delay} from '../../utils/time';
import APIError from '../../errors/APIError';
class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  async get(path) {

    await delay(500);
    const response = await fetch(`${this.baseUrl}${path}`);
    const contentType = response.headers.get('Content-Type')

    let body = null;
    if(contentType.includes('application/json')) {
      body = await response.json();
    }

    if(response.ok) {
      return body;
    }
    throw new APIError(response, body);
  }

  async post(path, payload) {

    await delay(500);

    const headers = new Headers({
      'Content-Type': 'application/json'
    })
    const response = await fetch(
      `${this.baseUrl}${path}`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers
      }
    );
    const contentType = response.headers.get('Content-Type')

    let body = null;
    if(contentType.includes('application/json')) {
      body = await response.json();
    }

    if(response.ok) {
      return body;
    }
    throw new APIError(response, body);
  }
}

export default HttpClient;