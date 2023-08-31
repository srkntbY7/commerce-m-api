const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const catProductsRouter = require('./routes/catProductsRoutes/catProductsRoutes');

const app = express();

app.use(helmet());

// development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Data sanitiation against No-SQL query injection
app.use(mongoSanitize());

// Data sanitiation against XSS
app.use(xss());

app.use('/api/v1/catproducts', catProductsRouter);


module.exports = app;