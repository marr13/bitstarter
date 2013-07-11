var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var out_text = fs.readFileSync('index.html').toString();
  response.send(out_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
