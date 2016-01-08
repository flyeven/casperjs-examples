casper.test.begin('assertEquals() tests', 3, function(test) {
    test.assertEquals(1 + 1, 2);
    test.assertEquals([1, 2, 3], [1, 2, 3]);
    test.assertEquals({a: 1, b: 2}, {a: 1, b: 2});
    test.done();
});
