const express = require('express');
const mysql = require('mysql')

const app = express();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mcs',
    password: 'Thepassword59..'
})

//set view engine
app.set('view engine', 'ejs')

//middlewear for static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.listen(3000)

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/new-profile', (req, res) =>{
    res.redirect('/')
})

app.post('/new-profile', (req, res) =>{
    console.log(req.body.firstName)

    //TODO: check for email if its already created
    //TODO: after login take back to home page to login


    pool.query('INSERT INTO users SET first_name=?, last_name=?, email=?, password=?',
    [req.body.firstName, req.body.lastName, req.body.email,req.body.password], (err, res) =>{
        if(err){
            console.log(err)
        }
        console.log(res)
    })

    res.redirect('/')

    createUser(req.body)
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/create-account', (req, res)=>{
    res.render('createAccount')
})