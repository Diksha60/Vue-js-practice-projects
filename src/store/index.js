import { createStore } from 'vuex'
import users from './users/users'
import products from './products/products'

export default createStore({
  modules: {
    users,
    products,
  }
})
