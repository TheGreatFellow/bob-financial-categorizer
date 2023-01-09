import axios from 'axios'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
const httpClient = axios.create({
    baseURL: 'https://hackathon.pirimidtech.com/hackathon',
    // withCredentials: true,
})

httpClient.interceptors.request.use(function (config) {
    // const refId = localStorage.getItem('referenceId')
    config.headers.API_KEY = '641118f97b6abe2b00c2c4c012'
    return config
})
export default httpClient
