import axios from 'axios';

const url = 'http://192.168.43.27:3003/users';

export const getUsers = async(id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addConfession = async(user) => {
    return await axios.post(`${url}/add`, user);
}

export const editConfession = async (id,user) => {
    return await axios.put(`${url}/${id}`,user);
}

export const deleteUser = async(id) => {
    return await axios.delete(`${url}/${id}`);
}