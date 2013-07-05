var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World! modified');
  // #!/usr/bin/env node
  // var fs = require('fs');
  // var outfile = "hello.txt";
  // var out = "Modify this script to write out something different.\n";
  // fs.writeFileSync(outfile, out);
  // console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
