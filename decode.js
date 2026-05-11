const fs = require('fs');
const path = require('path');
const dir = 'C:\\swp-dash-temp';

// Decode index.html
const idxB64 = fs.readFileSync(path.join(dir, 'index_b64.txt'), 'utf8').trim();
fs.writeFileSync(path.join(dir, 'index.html'), Buffer.from(idxB64, 'base64'));
console.log('index.html written: ' + fs.statSync(path.join(dir, 'index.html')).size + ' bytes');

// Decode data.json
const dataB64 = fs.readFileSync(path.join(dir, 'data_b64.txt'), 'utf8').trim();
fs.writeFileSync(path.join(dir, 'data.json'), Buffer.from(dataB64, 'base64'));
console.log('data.json written: ' + fs.statSync(path.join(dir, 'data.json')).size + ' bytes');
