var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.all( '/*', function ( req, res ) {
  res.send( '\
  <!DOCTYPE html>\
  <html>\
    <head>\
      <title>MEAN APP</title>\
      <base href="/"></base>\
    </head>\
    <body>\
      <div ui-view></div>\
      <h1>Hello from server.</h1>\
      <script src="bundle.js"></script>\
    </body>\
  </html>\
  ' );

} );

app.listen( PORT, function () {
  console.log( 'Server running on PORT: ' + PORT );
} );
