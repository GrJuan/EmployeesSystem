const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();

app.set('port', process.env.PORT || 4000); //variable de entorno, si no esta definida pasar al 4000

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/employees",require('./routers/employees.routers'))//llamar el url de employees


module.exports =app;