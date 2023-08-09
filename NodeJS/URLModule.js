const url = require('url');
const address = 'http://localhost:8080/default.htm?product=Earphone&price=100';
const parse = url.parse(address,true);
console.log(parse.pathname);
console.log(parse.host);
console.log(parse.hostname);
console.log(parse.search);
const query = parse.query;
console.log(query.product, query.price);
