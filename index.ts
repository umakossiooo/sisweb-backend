import express, { Express, Request, Response } from 'express';
const morgan = require('morgan');
import apiRouter from './src/routes';
const db = require('./src/models')

const app: Express = express();
const port = 3000;

db.sequelize.sync()
.then(() => {
console.log("Synced db.");
})
.catch((err:Error) => {
console.error("Failed to sync db: " , err.message);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    });