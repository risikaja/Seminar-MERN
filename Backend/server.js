//importojme paketat 
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require('./connect/database');

//krijojme nje variable per porten
const port = process.env.PORT || 5000;

//inicializojme expressin ne nje variable app
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//importojme middleware

const {errorHandler} = require("../Backend/MiddleWare/errorMiddleWare");
app.use(errorHandler);


app.use('/api/tasks', require('./Routes/taskRoutes'));
app.use('/api/users', require('./Routes/userRoutes'));


//inicializojme pritesin e requesteve
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
