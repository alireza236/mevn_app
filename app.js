const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ev = require('express-validation');
const parseError = require('parse-error');
const passport = require('passport');
const cors = require('cors');
const apiRoutes = require('./modules');
require('./middleware/auth.middleware');
require('./modules/config/database');
const app = express();

  // view engine setup
 //app.set('views', path.join(__dirname, 'views'));
 //app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.status(200).send({
  	status:"Success",
  	name:"mevn-stack",
  	description:" ",
  	data:{
  		version:"v1.0.0",
  		Author:"Ali Reza M",
  		 repository: {
           type: "git",
            url: "git+https://github.com/alireza236/mevn_app.git"
        },
  		 License:"MIT",
  		 homepage: "https://github.com/alireza236/mevn_app.git#readme"
  	  }
  })
});

app.get('/profile',passport.authenticate('jwt',{session: false}),
    function(req, res){
      res.status(200).json(req.user.toJSON())
})


apiRoutes(app);

// catch 404 and forward to error handler
app.get('*', function(req, res, next) {
  let err = new Error(`${req.ip} tried to reach ${req.originalUrl}`);
  err.statusCode = 404;
  err.shouldRedirect = true;
  next(err);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
   if (err instanceof ev.ValidationError){
     return res.status(err.status).json(err);
   }

   if (process.env.NODE_ENV !== 'production') {
      return res.status(500).send(err.stack);
   } else {
      return res.status(500);
   }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).send({error:err.message});
  //res.render('error');
});

module.exports = app;

process.on('unhandledRejection', error => {
    console.error('Uncaught Error', parseError(error));
});
