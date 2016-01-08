casper.test.begin('assertNotVisible() tests', 1, function(test) {
    casper.start().then(function() {
        this.setContent('<div class="foo" style="display:none>boo</div>');
        test.assertNotVisible('.foo');
    }).run(function() {
        test.done();
    });
});
