const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();

const mongoURI = 'mongodb+srv://shahadat:shahadat123@ambulance-finder-projec.c9hq8.mongodb.net/Ambulance-finder?retryWrites=true&w=majority' ;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
  .then((result)=> console.log('connected to MongoDB'))
  .catch((err) => console.log(err));


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

/*
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  
  console.log("Mongodb database connection established successfully !!");
})

*/


const loginRouter = require('./routes/login');
const signUpRouter = require('./routes/signUp');

app.use('/login', loginRouter);
app.use('/signUp', signUpRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});