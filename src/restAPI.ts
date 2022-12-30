import axios from 'axios';

const baseURL = 'localhost' //http://localhost:3000

export const getComments = axios.get(`${baseURL}/comments`)

