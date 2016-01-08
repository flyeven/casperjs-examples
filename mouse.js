var casper = require("casper").create();
var mouse = require("mouse").create(casper);

casper.start();
casper.then(function() {
    this.mouse.click(400, 300); // clicks at coordinates x=400; y=300
});

casper.run();
