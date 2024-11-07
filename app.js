const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const indexRouter = require('./routes/index-router');
const hisaabRouter = require('./routes/hisaab-router.js');
const db = require('./config/mongoose-connection');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/hisaab', hisaabRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
