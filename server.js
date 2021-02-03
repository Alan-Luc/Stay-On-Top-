const express = require('express');
const bodyParser = require('body-parser');
const csvParser = require('csv-parser');
const cors = require('cors');


//require('dotenv').config();

const app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};

const db = require('./app/models');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!")
    })
    .catch(err => {
        console.log('Cannot connect to the database!', err);
        process.exit();
    });
/*const db = require('db');
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS
})*/

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ messsage: 'Welcome to application.' });
});

require("./app/routes/tutorial.routes")(app);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});