import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-banco-de-dados.herokuapp.com/',
})

export default api;