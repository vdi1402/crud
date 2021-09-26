import { FormControl, FormGroup, TextField, Input } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import './addconfess.css'
import { Button } from '@mui/material';
import { addConfession } from './Service/api';

import { useHistory } from 'react-router';

const initialValues = {
  "username": '',
  "confesiion":'',
}


const Addconfessions = () => {
  const [ user, setUser] = useState(initialValues);
  const {username, confesiion} = user;
  const history = useHistory()
    const onValueChange = (e) => {
      console.log(user);
      setUser({...user, [e.target.name]: e.target.value })
    }

    const addConfessionDetails = async() => {
await addConfession(user);
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
<Button onClick={ addConfessionDetails()} className="btn">Add Confession</Button>
          </FormGroup>
        </div>
    )
}

export default Addconfessions
