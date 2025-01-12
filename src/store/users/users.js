import axios from "axios"

const state = {
    users: []
}
const getters = {
    allUsers: state => state.users
}
const actions = {
    async getUsers({commit}){
        const response = await axios.get("http://localhost:3000/products")
        commit("setUsers", response.data)
    }
}
const mutations = {
    setUsers: (state, users) => (state.users = users)
}

export default {
    state,
    getters,
    actions,
    mutations,
}