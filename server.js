const contactRouter = require('./routes/contactsRoute')
const errorHandler = require('./middlewares/Middleware')
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const express = require('express');

connectDb();
const app = express();
port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use(errorHandler)

app.listen(port, () => {
    console.log('listening on port  ' + port);
});