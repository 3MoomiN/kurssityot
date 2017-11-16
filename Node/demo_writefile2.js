var fs = require('fs');

fs.writeFile('./tekstit/uusi2.txt', 'Tässä korvaava teksti', function (err) {
if (err) throw err;
console.log('Korvattu!');
});