const fs = require('fs');
// Reading a file asynchronously with a callback
fs.readFile('example1.txt', 'utf8', function(error, data) {
    if (error) {
        console.error('Error reading the file:', error);
    } else {
        console.log('File content:', data);
    }
});
