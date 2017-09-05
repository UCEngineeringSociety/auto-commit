var execSync = require('child_process').execSync
var fs = require('fs')
var index = fs.readFileSync('commit.txt', 'utf-8')

function commit (message) {
  var child = execSync('git add . && git commit -m "' + message + '" && git push -u origin master', function (error, stdout, stderr) {
    console.log(stdout)
    console.log(stdout)
    console.log(error)
  })
}

function changeFile () {
  var newValue = index

  fs.writeFileSync('commit.txt', newValue, 'utf-8')

  console.log('Commit ' + index + ' inserted.')
}

function startAutoCommit () {

  index++
  changeFile()
  commit('Commit Number: #' + index)

    var seconds = Math.floor(Math.random() * 5)
  setTimeout(function () {
    startAutoCommit()
  }, seconds * 1000)
}

startAutoCommit()
