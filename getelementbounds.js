var casper = require('casper').create();

casper.start('http://www.google.fr/', function() {
    require('utils').dump(this.getElementBounds('div[title="Google"]'));
});

casper.run();
