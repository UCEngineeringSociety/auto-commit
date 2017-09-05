var sys = require('util')
var exec = require('child_process').exec;
var child;

child = exec("pwd", function (error, stdout, stderr) {
  console.log(stdout);
});
