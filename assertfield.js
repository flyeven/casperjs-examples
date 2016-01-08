casper.test.begin('assertField() tests', 1, function(test) {
    casper.start('http://www.google.com/', function() {
        this.fill('form[name="f"]', { q: 'plop' }, false);
        test.assertField('q', 'plop');
    }).run(function() {
        test.done();
    });
});
