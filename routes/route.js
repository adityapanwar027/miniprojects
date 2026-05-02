const express = require('express')
const router = express.Router()

// middleware 
// this middleware is for authentication
const auth = function (req, res, next) {
    console.log('i am inside the Auth middleware')

    // dumy user
    req.user = {userId: 1, role: "admin"};

    if (req.user) {
        // if a valid user is there in req, then proceed to next middleware
        next()
    } else {
        // if not valid user
        res.json({
            success: false,
            message: "Not a valid user",
        })
    }
   
}

// this middleware will check the is user === student
const isStudent = function (req, res, next) {
    console.log("i am inside the student middleware");

    if (req.user.role === "student") {
        next()
    } else {
        res.json({
            success: false,
            message: "access denid, this route is only for students",
        })
    }
}

// this middleware check the user === admin
const isAdmin = function (req, res, next) {
    console.log("i am from admin middleware");

    if (req.user.role === "admin") {
        next()
    } else {
        res.json({
            success: false,
            message: "access denid, this is only for admins"
        })
    }
}


// Routes
router.get('/student', auth, isStudent,(req, res)=> {
    console.log('i am inside the student route')
    res.send('students specific page')
})

router.get('/admin', auth, isAdmin,(req, res)=>{
    console.log('i am inside the Admin route')
    res.send('Admin specific page')
})


module.exports = router