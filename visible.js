
var casper = require('casper').create();

casper.start('http://google.com/', function() {
    if (this.visible('#hplogo')) {
        this.echo("I can see the logo");
    } else {
        this.echo("I can't see the logo");
    }
});


casper.run();

