const express = require('express');
const routes = require('./backend/controllers/routes')
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
const mongo_uri = process.env.MONGO || 'mongodb://localhost:27017/nolip'
mongoose.connect(mongo_uri,
     { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.info('✔ Connected to MongoDB'),
)

const port =  process.env.PORT || 8000;

app.listen(port, () => {
    console.info('server started on port : ' + port)
})
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/', routes);


