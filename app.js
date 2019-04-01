const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up db
require('./models/db.js');

// set up routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);


app.get('/', (req, res) => {
  res.send('hello home page');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
