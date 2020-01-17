import axios from 'axios';

const baseURLProd = 'http://35.238.126.133';
const baseURLDev = 'http://localhost:3000';

const instance = axios.create({
    baseURL: baseURLProd
});

module.exports = {
    instance
};