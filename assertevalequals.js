casper.test.begin('assertEvalEquals() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertEvalEquals(function() {
            return __utils__.findOne('.heaven').textContent;
        }, 'beer');
    }).run(function() {
        test.done();
    });
});
