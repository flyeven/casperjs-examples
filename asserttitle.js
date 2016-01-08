casper.test.begin('assertTitle() tests', 1, function(test) {
    casper.start('http://www.google.fr/', function() {
        test.assertTitle('Google', 'google.fr has the correct title');
    }).run(function() {
        test.done();
    });
});
