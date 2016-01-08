
var casper = require('casper').create({
    colorizerType: 'Dummy'
});

casper.echo("Hello", "INFO");

