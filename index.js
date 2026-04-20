const express = require('express')
const app = express()
const PORT = 3000

// loading middleware into the app
// inbuilt middlewre 
app.use(express.json());

// middleware - logging, auth, validation

// creation a middleware
// const loggingMiddleware = function (req, res, next) {
//    console.log('LOGING kr rha hu')
//    next();
// }
// const AuthMiddleware = function (req, res, next) {
//    console.log('Auth kr rha hu')
//    next();
// }

// const ValidationMiddleware = function (req, res, next) {
//    console.log('Validation kr rha hu')
//    next();
// }
// // loading middleware into the appolication
// app.use(loggingMiddleware);
// app.use(AuthMiddleware);
// app.use(ValidationMiddleware);

const route = require('./routes/route')
// mounting the routes
app.use('/api', route)

// => /api/student
// => /api/admin


app.get('/', (req, res) => {
    console.log("i am the route handler")
    console.log(req.body);
    res.send("Hello world")
})

app.listen(PORT, () => {
    console.log(`Example app listening on pot ${PORT}`)
})
