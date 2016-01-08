var casper = require("casper").create();
var start = new Date().getTime();
var links = [
  "http://google.com/",
  "http://yahoo.com/",
  "http://duckduckgo.com/",  
  "http://bing.com/"
];

casper.start();

casper.each(links, function(self, link) {
    this.thenOpen(link, function() {
        var now = new Date().getTime();
        this.echo(link + ' loaded in ' + (now - start) + 'ms');
        start = now;
    });
});

casper.run();
