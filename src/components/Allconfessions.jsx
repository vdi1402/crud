import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from './Service/api'
import { makeStyles } from '@mui/styles';
import Paper from  '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, color, display } from '@mui/system';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import './Allconfession.css'
const useStyle = makeStyles({

  
    paper: {
      padding: 28,
      textAlign: "center",
      color: "#000000",
      background: '#600047'
    },
    item:{
        paddingTop: 86,
  
    },
    button: {
      background: "#6000047"
    }
  });

function Allconfessions() {

  const [open, setOpen] =  useState(false);

  const [text, setText] = useState();

    const classes = useStyle();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllusers();
    }, [])
    const getAllusers =async() => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
      await deleteUser(id);
      getAllusers();
    }
    return (
       
        <div>
<Dialog onClose={() => {setOpen(false)}}open={open}>

      <DialogTitle>{text}</DialogTitle>


      </Dialog>
      <Grid container spacing={4} style={{padding: "64px"}}>
 
          
 {
     users.map(user => (
       <Grid item xs ={4}>
       <Paper  style={{background: "#600047",marginBottom:"10px", height:"36vh"}} className={classes.paper}>
         <span>{user.id}</span>
         <p style={{color: "white"}}>{user.confesiion.substring(0,150)} </p>
         <p onClick={()=>{ setText(user.confesiion);setOpen(true)}} style={{display:user.confesiion && user.confesiion.length > 150? "":"none"}}>see more</p>
         <span style={{color: "gray"}}> By {user.username} </span>
      
         <Box  m={2} pl={8}component="div" sx={{ display: 'flex' }} style={{justifyContent: "space-evenly",
alignItems: "flex-start"}}>

         <Button style={{ background: "#fefefe", color: "black", marginTop:"50px", marginLeft:"1vh"}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
 
    
         <Button m={5} onClick={() => deleteUserDetails(user.id)}  style={{background: "#fefefe", marginRight:"12vh", color: "black", marginTop:"50px",}}>Delete</Button>


</Box>

</Paper>
</Grid>

 
     ))
 }


</Grid>


</div>

)
}
export default Allconfessions
