import HttpClient from "./utils/HttpClient"
class ContactsService{
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3003`)
  }

  listContacts(orderBy = 'asc'){
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`)
  }

  createContacts(payload){
    return this.httpClient.post(`/contacts`, payload)
  }

  updateContacts(id, payload){
    return this.httpClient.put(`/contacts/${id}`, payload)
  }


  getContactById(id) {
    return (this.httpClient.get(`/contacts/${id}`))
  }
}

export default new ContactsService();