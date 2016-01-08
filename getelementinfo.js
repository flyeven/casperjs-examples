var casper = require('casper').create();

casper.start('http://google.fr/', function() {
    require('utils').dump(this.getElementInfo('#hplogo'));
});

casper.run();

