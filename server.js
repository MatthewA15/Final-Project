
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://matthewallicock:ABC123ABC123@cluster0.ln0s9ke.mongodb.net/Clothings?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


var app = require('./app');
var debug = require('debug')('Final Project:server');
var express = require('express');
var router = express.Router();
/**
 * Normalize a port into a number */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
const port = normalizePort(process.env.PORT || '4000');
app.set('port', port);

app.listen(port, () => {
  debug('Listening on port ' + port);
  console.log(`Server running on port ${port}`);
});
/**
 * Event listener for HTTP server "error".*/
app.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors 
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page',
  heading: 'Home'
 });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us',
  heading: 'About Us'
 });
});
/* GET Projects page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services',
  heading: 'Services'
 });
});
/* GET Contact page. */
router.get('/claims', function(req, res, next) {
  res.render('index', { title: 'Claims',
  heading: 'Claims'
 });
});
/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us',
  heading: 'Contact Us'
 });
});



