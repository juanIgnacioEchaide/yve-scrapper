import axios from "axios";

const client = axios.create({
    withCredentials: false,
    headers: {
        'Authorization': '*'
    }
})

export { client }