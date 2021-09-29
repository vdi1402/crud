import axios from 'axios';

const usersUrl = 'http://localhost:8000/user';

export const getUsers = async(id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
};

export const addConfession = async (user) => {
   return await axios.post(`${usersUrl}/add`, user);
   
  

}

export const editConfession = async (id,user) => {
    return await axios.put(`${usersUrl}/${id}`,user);
}

export const deleteUser = async(id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}