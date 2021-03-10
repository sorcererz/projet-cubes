const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoute')
const ressourceRouter = require('./routes/ressourceRoute') ;
const authRouter = require('./routes/authRouter') ;
const progressionRouter = require('./routes/progressionRouter');
const echangeRouter = require('./routes/echangeRouter');


 // permet d'eviter les erreurs de cors et permet à l'api d'etre utilisé depuis n'imoorte quelle origine
app.use((req, res, next) => {
    
   
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// transforme le corps de la requete en objet js
app.use(bodyParser.json())


//ROUTE 
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/ressource', ressourceRouter)
app.use('/api/user/progression', progressionRouter)
app.use('/api/echanges', echangeRouter)

module.exports = app;