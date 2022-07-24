const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const app = express();

mongoose.connect("mongodb+srv://parth:P1r5h0403@gql.xedwfcs.mongodb.net/temp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static('public'))
app.engine("ejs", ejsMate);



const sessionConfig = {
  secret: 'thisshouldbeabettersecret!',
  resave: false,
  saveUninitialized: true,
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}
app.use(session(sessionConfig))

app.use(passport.initialize());
app.use(passport.session()); 
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get('/login', (req,res)=>{
  res.send('Working!')
})

app.post('/register', async (req, res, next) => {
  try {
      const { email, username, password } = req.body;
      const user = new User({ email, username});
      const registeredUser = await User.register(user, password);
      res.send(registeredUser);
     
  } catch (e) {
     res.redirect('register');
  }
});

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
  res.send(`Welcome ${req.user.username}`)
})

app.get('/logout', (req,res)=>{
  if(req.user){
    req.logout();
    return res.send(`Goodbye `);
  }
  else{
    res.send("Not logged in")
  }  
})


app.listen(3000, ()=>{
  console.log("App is listening on port 3000")
})