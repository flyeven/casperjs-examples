casper.test.begin('casperjs.org is up and running', 1, function(test) {
    casper.start('http://casperjs.org/', function() {
        test.assertHttpStatus(200);
    }).run(function() {
        test.done();
    });
});
