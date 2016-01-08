var href;
casper.start('http://extranet/', function() {
    href = this.evaluate(function() {
        return __utils__.findOne('.link-pie').getAttribute('href');
    });
});

casper.run(function() {
    this.echo(href).exit();
});
