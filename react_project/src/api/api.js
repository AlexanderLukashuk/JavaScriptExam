import axios from 'axios';

/*const instanceAPI = axios.create({
    baseURL: 'https://swapi.dev/api/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});*/

const instanceAPI = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Client-ID S7I8WuOXmevBlQIIbTlWsOTPAy4Y20xd6Xu2bCFWbqY',
    },
});

export default instanceAPI;