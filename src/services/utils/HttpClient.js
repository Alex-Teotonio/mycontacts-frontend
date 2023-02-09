import {delay} from '../../utils/time';
import APIError from '../../errors/APIError';
class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  async get(path) {
    return this.makeRequest(path, {method: 'GET'})
  }

  async post(path, payload) {

    return this.makeRequest(path, {
        method: 'POST',
        body: payload
      })
  }

  async put(path, payload) {

    return this.makeRequest(path, {
        method: 'PUT',
        body: payload
      })
  }


  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers()

    if(options.body) {
      headers.append('Content-Type', 'application/json')
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers
    });
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