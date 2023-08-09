// creating a new folder using mkdir or mkdirSync or fspromise.mkdir
const fs = require('fs')
const folder = 'manipulated';
try
{
if (!fs.existsSync(folder))
{
    fs.mkdirSync(folder);
}
}
catch (err)
{
console.err(err);
}
// reading the files of the directory
const folderPath = '__tests__';
const data = fs.readdirSync(folderPath);
console.log(data)

