/**
 * davidam-test.js - Homepage tests.
 */

var x = require('casper').selectXPath;

casper.test.begin('Tests homepage structure', 7, function suite(test) {

  casper.start('http://www.davidam.com', function() {
    // Verify that the main menu links are present.
    test.assertExists('a.org-effectiveness', '"Org Effectiveness" link is found.');
    test.assertExists('a.drupal-el', '"Drupal el" link is found.');
    test.assertExists('a.orgmode-drupal', '"Orgmode Drupal" link is found.');

    casper.waitForSelector(x("//*[normalize-space(text())='Traducción de una Introducción a GCC']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Traducción de una Introducción a GCC']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Traducción de una Introducción a GCC']"));
       });
    casper.waitForSelector(x("//*[normalize-space(text())='fuentes']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='fuentes']"));
       },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='fuentes']"));
       });
    casper.waitForSelector(x("//*[normalize-space(text())='Traducción de Guía Compacta de Org Mode']"),
       function success() {
           test.assertExists(x("//*[normalize-space(text())='Traducción de Guía Compacta de Org Mode']"));
         },
       function fail() {
           test.assertExists(x("//*[normalize-space(text())='Traducción de Guía Compacta de Org Mode']"));
       });

    // 10 articles should be listed.
    test.assertElementCount('.box', 10, '10 boxes are listed.');
  });

  casper.run(function() {
    test.done();
  });
});
  
