casper.test.begin('assertDoesntExist() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven"></div>');
        test.assertDoesntExist('.taxes');
    }).run(function() {
        test.done();
    });
});
