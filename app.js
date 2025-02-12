const port = 5005
const express = require('express');
const app = express();
const userRoute = require('./routes/userRoutes')
// app.use(express.urlencoded({ extended : true}))

app.use('/', userRoute)

app.listen(port, ()=> console.log('running sucessfully on port ', port))