import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "./Service/api";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, color, display } from "@mui/system";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import "./Allconfession.css";
const useStyle = makeStyles({
  paper: {
    padding: 28,
    textAlign: "center",
    color: "#000000",
    background: "#600047",
  },
  item: {
    paddingTop: 105,
  },
  text: {
    color: "grey",
  },
  padding:{
    padding:"105"
  }
,
  button: {
    background: "#6000047",
  },
});

const Allconfessions = () => {
  const [open, setOpen] = useState(false);

  const [text, setText] = useState();

  const classes = useStyle();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllusers();
  }, []);
  const getAllusers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllusers();
  };
  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogTitle>{text}</DialogTitle>
      </Dialog>
      <Container>
        <Grid container spacing={10}>
          {users.map((user) => (
            <Grid item lg={4} md={6} sm={6} className={classes.item}>
              <Paper
                style={{
                  background: "#600047",
                  height: "43vh",
                  width: "21rem",
                  textAlign: "center",
                }}
              >
                <Typography variant="h4">{user._id}</Typography>
                <Typography variant="subtitle">
                 <p> {user?.confesiion?.substring(0, 150)}</p>
                </Typography>
                <Typography variant="subtitle">
                  <p
                    onClick={() => {
                      setText(user.confesiion);
                      setOpen(true);
                    }}
                    style={{
                      display:
                        user.confesiion && user.confesiion.length > 150
                          ? ""
                          : "none",
                    }}
                  >
                    see more
                  </p>
                </Typography>
                <Typography className={classes.text}>
                  By {user.username}
                </Typography>
                <Button
                  style={{
                    background: "#fefefe",
                    color: "black",
                    marginTop: "50px",
                    marginLeft: "1vh",
                  }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>

                <Button
                  m={5}
                  onClick={() => deleteUserDetails(user._id)}
                  style={{
                    background: "#fefefe",
                    marginRight: "12vh",
                    color: "black",
                    marginTop: "50px",
                  }}
                >
                  Delete
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};
export default Allconfessions;
