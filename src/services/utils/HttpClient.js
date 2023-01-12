import {delay} from '../../utils/time';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`)
    await delay(500);
    return response.json();
  }
}

export default HttpClient;