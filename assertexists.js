casper.test.begin('assertExists() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertExists('.heaven');
    }).run(function() {
        test.done();
    });
});
