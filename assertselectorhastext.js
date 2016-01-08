casper.test.begin('assertSelectorHasText() tests', 1, function(test) {
    casper.start('http://google.com/', function() {
        test.assertSelectorHasText('title', 'Google');
    }).run(function() {
        test.done();
    });
});
