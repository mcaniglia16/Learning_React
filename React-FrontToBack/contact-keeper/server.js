const express = require('express');
const connectDB = require('./config/db')

const app = express();

//Connect databse
connectDB();

//init middleware
app.use(express.json({extended: false}));

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log(`Server on port ${PORT}`)
})


//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/', (req, res)=> {
    res.json({msg: 'Welcome to the contact keeper API'})
})