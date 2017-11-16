var fs = require('fs');

fs.unlink('./tekstit/uusi2.txt', function (err) {
if (err) throw err;
console.log('Tiedosto poistettu!');
});