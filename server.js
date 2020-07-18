const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const items = require('./Routes/api/trades');

const path = require('path');

// load config
dotenv.config({ path: './config/config.env' })

// passport config
require('./config/passport')(passport)

connectDB()

const app = express()

// check if in dev mode
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// bodyparser middleware
app.use(bodyParser.json());

// routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

// use routes
//app.use('/api/trades', trades )

//  EXAMPLE OF USING API
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Create PORT
const PORT = process.env.PORT || 5000

// checking if running properly
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))