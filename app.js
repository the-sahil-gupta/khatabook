const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

const indexRouter = require('./routes/index-router');
const db = require('./config/mongoose-connection');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000, () => {
	console.log('Server is running');
});
