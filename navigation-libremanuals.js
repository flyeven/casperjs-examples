
var casper = require('casper').create();

casper.start('http://libremanuals.net');

casper.run(function() {
    this.echo('message sent').exit();
});

casper.thenOpen('http://libremanuals.net', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://libremanuals.net/acerca-de', function() {
    this.echo(this.getTitle());
});

