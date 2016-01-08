
var casper = require('casper').create();

casper.start('http://casperjs.org/').thenClick('a', function() {
    this.echo("I clicked on first link found, the page is now loaded.");
});

casper.run();
