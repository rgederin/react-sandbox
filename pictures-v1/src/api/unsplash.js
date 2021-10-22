import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID qjGBqZjaEoiSlm0s2KmkRHNYZo9I35XKeM5VVScYHgo'
    }
});