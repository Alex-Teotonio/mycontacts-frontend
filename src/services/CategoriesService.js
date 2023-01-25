import HttpClient from "./utils/HttpClient"
class Categories{
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3003`)
  }

  async listCategories(){
    return this.httpClient.get(`/categories`)
  }
}

export default new Categories();