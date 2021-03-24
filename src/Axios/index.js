import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialFormsList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Barack',
    email: 'Barack@Obama.com',
    role: 'Graduate',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialFormsList })
  },
  post(url, { name, email, role }) {
    const newForm = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newForm })
  }
}
