const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectToMongo = require('./db');
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/auth', require('./routes/auth'));
app.use('/api/order', require('./routes/order'));
app.use('/api/food', require('./routes/food'));
app.use('/api/reservation', require('./routes/reservation'));

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
