import {delay} from '../utils/time'

class ContactsService{

  async listContacts(orderBy = 'asc'){
    const response = await fetch(`http://localhost:3003/contacts?orderBy=${orderBy}`)
    await delay(500);
    return response.json();
  }
}

export default new ContactsService()