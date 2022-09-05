import axios from "axios";


export const sendGetRequest = (method = "get", url = "") => {
    return axios({
        method: method,
        url: url,
    })
        .then(response => response.data)
        .catch(err => console.log(err))
}