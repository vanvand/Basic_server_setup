const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // add cors settings here to remove cors authetication problem
app.use(express.json());

// connect DB
// task: ADD YOUR DB LINK FROM .env
const uri = process.env.DB_LINK;
mongoose
  .connect(uri)
  .then(() => {
    console.log('My Database is connected successfully');
  })
  .catch((error) =>
    console.log('Error: Database is somehow not connected', error)
  );

// import routes
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

// set-up routes
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(PORT, () => {
  console.log(`The Server is running Successfully in ${PORT} .....`);
});
