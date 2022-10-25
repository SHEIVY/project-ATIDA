const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const api_router = require('./routers/api')
const API_PORT = 3000;
const app = express();
app.use(cors());
const router = express.Router();


async function init_mongo() {
  await mongoose.connect('mongodb://localhost:27017/HMOcustomers');
}

init_mongo().then(_ => {
  app.listen(API_PORT, () => console.log(`server is listening at http://localhost:${API_PORT}`)
  )
})

const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.get('/getCust', (req, res) => {
  customer.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});





app.use('/api', api_router)
app.use(express.json())
