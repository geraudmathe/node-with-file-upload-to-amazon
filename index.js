const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const expressLayouts = require('express-ejs-layouts');
const app = express();


app.use(morgan('dev'));

const routes = require('./config/routes');
const { port, dbURI } = require('./config/environment');

mongoose.connect(dbURI);



app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);


app.use(routes);
app.listen(port, () => console.log(`Express is listening to port ${port}`));
