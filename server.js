const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('UNNCAUGHT EXCEPTION. SHUTTING DOWN...');
  console.log(err.name, err.message);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

mongoose
  .connect(DB)
  .then(() => console.log('*** DB connection successfull ***'));


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});