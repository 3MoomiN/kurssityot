var fs = require('fs');

fs.appendFile('./tekstit/uusi.txt', 'Juu mo tääl mennää ,,,', function (err) {
if (err) throw err;
console.log('Tallessa!');
});