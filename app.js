const express = require('express');
const app = express();
const path = require('path');
const adminRouter = require('./routes/adminRouter');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const db = require('./config/mongoose-connection');
const { active } = require('./controllers/authController');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', "ejs");
app.use(express.static(path.join(__dirname, "public")));

// In app.js or adminRouter.js
// app.use((req, res, next) => {
//     console.log('Received request:', req.method, req.url); // Log every incoming request
//     next();
// });
app.use('/', indexRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000);