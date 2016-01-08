/**
 * davidam-test.js - Homepage tests.
 */

casper.test.begin('Tests homepage structure', 7, function suite(test) {

  casper.start('http://www.davidam.com', function() {
    // Verify that the main menu links are present.
    test.assertExists('a.org-effectiveness', '"Org Effectiveness" link is found.');
    test.assertExists('a.drupal-el', '"Drupal el" link is found.');
    test.assertExists('a.orgmode-drupal', '"Orgmode Drupal" link is found.');
    // 10 articles should be listed.
    test.assertElementCount('.box', 10, '10 boxes are listed.');
  });

  casper.run(function() {
    test.done();
  });
});
  
