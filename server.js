var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all( '/*', function ( req, res ) {
  res.send( '\
  <!DOCTYPE html>\
  <html>\
    <head>\
      <title>MEAN APP</title>\
    </head>\
    <body>\
      <h1>Hello, this is app.</h1>\
      <h2>Live reloading...</h2>\
      <script src="bundle.js"></script>\
    </body>\
  </html>\
  ' );

} );

app.listen( PORT, function () {
  console.log( 'Server running on PORT: ' + PORT );
} );
