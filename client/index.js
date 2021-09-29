import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'
import route from './route/routes.js';



const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

app.use('/user', route);
const PORT = 8000;
const URL = 'mongodb+srv://user:vidhitomar@crud.oiytu.mongodb.net/CRUD?retryWrites=true&w=majority';


mongoose.connect(URL,{ useNewUrlParser:true, useUnifiedTopology: true, /*usefindandmodify: false*/ }).then(() => {




app.listen(PORT, () => 
{console.log(`Server is running successfully on port ${PORT}`)
});
}).catch(error => {
console.log('ERROR: ', error.message)

})