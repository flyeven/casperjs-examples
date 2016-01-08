casper.test.begin('assertEval() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="heaven">beer</div>');
        test.assertEval(function() {
            return __utils__.findOne('.heaven').textContent === 'beer';
        });
    }).run(function() {
        test.done();
    });
});
