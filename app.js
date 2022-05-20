const express = require('express');
const mysql = require('mysql');
const app = express();
// const verifyInputs = require('./public/script')
const inputVal = require('./public/script')

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


app.get('/login', (req, res)=>{
    res.render('login')
})

app.get('/create-account', (req, res)=>{
    res.render('createAccount')
})

app.post('/create-account', (req, res) =>{
    console.log(req.body.firstName)

    //TODO: check for email if its already created
    //TODO: after login take back to home page to login

    //db commands
    // pool.query('INSERT INTO users SET first_name=?, last_name=?, email=?, password=?',
    // [req.body.firstName, req.body.lastName, req.body.email,req.body.password], (err, res) =>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(res)
    //     console.log('Account Created')
    // })
    
    if(inputVal.verifyInputs(req.body.email, req.body.emailConfirm)){
        console.log('true output')
        if(inputVal.verifyInputs(req.body.password, req.body.passConfirm)){
            console.log('Passwords match too')
        }else{
            console.log("passwords dont match")
        }
    }
    else{
        //TODO: create design for falsly matching emails
        console.log('false')
    }

    res.redirect('/')

})

app.get('/business-name', (req,res) =>{
    res.render('AddBusiness')
})

app.get('/main-component', (req,res) =>{
    res.render('calanderView')
})