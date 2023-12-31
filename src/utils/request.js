import axios from 'axios';

const axiosLogin = axios.create(
    (() => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        return {
            baseURL: 'http://localhost:8080/api/v1/auth',
            headers,
        };
    })(),
);

const Users = axios.create(
    (() => {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        return {
            baseURL: 'http://localhost:8080/api/v1/users',
            headers,
        };
    })(),
);

const Employees = axios.create(
    (() => {
        const headers = {
            'Content-Type': 'application/json',
        };
        return {
            baseURL: 'http://localhost:8080/api/v1/employees',
            headers,
        };
    })(),
);

const Genres = axios.create({
    baseURL: 'http://localhost:8080/api/v1/genres',
});

const Stories = axios.create({
    baseURL: 'http://localhost:8080/api/v1/stories',
});

const Authors = axios.create({
    baseURL: 'http://localhost:8080/api/v1/author',
});

const Comments = axios.create({
    baseURL: 'http://localhost:8080/api/v1/comment',
});

export { Users, Employees, Stories, Genres, axiosLogin, Authors, Comments };
