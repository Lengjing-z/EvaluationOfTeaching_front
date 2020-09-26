import axios from 'axios'
const baseURL = 'back/'
const myAxios = axios.create({
    baseURL: baseURL,
    headers: {
      contentType : "application/json;charset=UTF-8"
    }
})
myAxios.defaults.withCredentials = true
export default myAxios
