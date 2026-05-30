//importojme paketat 
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require('./connect/database');
const Cors = require('cors');
const {errorHandler} = require("../Backend/MiddleWare/errorMiddleWare");

//krijojme nje variable per porten
const port = process.env.PORT || 5000;

//inicializojme expressin ne nje variable app
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(Cors())
//importojme middleware





app.use('/api/tasks', require('./Routes/taskRoutes'));
app.use('/api/users', require('./Routes/userRoutes'));

app.use(errorHandler);

//inicializojme pritesin e requesteve
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


