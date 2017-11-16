var fs = require('fs');

fs.open('./tekstit/uusi.txt', 'w', function (err, file) {
if (err) throw err;
console.log('Avattu\'d!');
});