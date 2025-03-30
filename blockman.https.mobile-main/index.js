const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const configRouter = require('./route/config');

const userRouter = require('./route/user');
const gamesRouter = require('./route/games');

const decorationRouter = require('./route/decoration');
const mailboxRouter = require('./route/mailbox');

const databaseConfig = require('./config/database');

// Dont change these
const app = express();
const port = 3000;

mongoose.connect(databaseConfig.databaseUrl)
  .then(() => {
    console.log(`The connection to database ${databaseConfig.databaseType} is made and working`);
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
});

app.use(express.json());

app.use('/config', configRouter);
app.use('/user', userRouter);
app.use('/game', gamesRouter);

app.use('/decoration', decorationRouter);

app.use('/mailbox', mailboxRouter);

app.all('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(port, () => {
  console.log(`Success your server is available at http://localhost:${port}`);
});
