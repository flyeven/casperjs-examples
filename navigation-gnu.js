
var casper = require('casper').create();

casper.start('http://www.gnu.org', function() {
    this.echo(this.getTitle());
});

casper.run(function() {
    this.echo('message sent').exit();
});

casper.thenOpen('http://gnu.org/education/education.html', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://gnu.org/licenses/licenses.html', function() {
    this.echo(this.getTitle());
});

