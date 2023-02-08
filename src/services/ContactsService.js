import HttpClient from "./utils/HttpClient"
class ContactsService{
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3003`)
  }

  async listContacts(orderBy = 'asc'){
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }

  async createContacts(payload){
    return this.httpClient.post(`/contacts`, payload)
  }
}

export default new ContactsService();