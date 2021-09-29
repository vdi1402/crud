import React, { useEffect } from 'react'
import { FormControl, FormGroup, TextField,  } from '@mui/material'

import {useState} from 'react'
import './addconfess.css'
import { Button } from '@mui/material';

import { useHistory, useParams } from 'react-router';
import { editConfession, getUsers } from './Service/api';






const initialValues = {
  "username": '',
  "confesiion":'',
}




const Editconfession=() => {
    const [ user, setUser] = useState(initialValues);
    const {username, confesiion} = user;
    const { id } = useParams()
    let history = useHistory()

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails= async() => {
      const response = await getUsers(id);
      setUser(response.data);
    }
      const onValueChange = (e) => {
        console.log(user);
        setUser({...user, [e.target.name]: e.target.value })
      }
  
      const editConfessionDetails = async() => {
        const response = await editConfession(id, user);
  history.push('/all');
      }
      return (
          <div  style={{color: "white"}}>
              
            <FormGroup style={{padding: "15rem"}}>
            <FormControl  style={{border: "white"}}>
  <TextField name='confesiion' value={confesiion} onChange={(e) => onValueChange(e)} style={{border: "white"}}id="outlined-basic" label="Type Your Confession here!" variant="outlined" />
  
  </FormControl>
  
  <FormControl  style={{border: "white"}}>
  <TextField  onChange={(e) => onValueChange(e)} style={{border: "white"}}id="outlined-basic" label="Type your name" name="username" value = {username} variant="outlined" />
  
  
  </FormControl>
  <Button onClick={() => editConfessionDetails()}>Edit Confession</Button>
            </FormGroup>
          </div>
      )
  }


export default Editconfession 
