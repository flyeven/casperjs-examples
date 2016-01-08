casper.test.begin('assertTitleMatch() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTitleMatch(/Google/, 'google.fr has a quite predictable title');
    }).run(function() {
        test.done();
    });
});
