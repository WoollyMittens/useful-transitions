var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulUrls = require('../src/js/useful-transitions.js'),
    path = 'http://local.woollymittens.nl/useful-transitions/';

describe('Expected behaviours of "useful-transitions"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should return a collection of selected elements', function(done){
        client
            .url(path)
            .execute(function () {

                var elements = useful.transitions.select('.useful-tests dd');
                return [elements.length, elements[0].nodeName];

            }, function (err, result) {

                assert(
                    result.value[0] === 3 &&
                    result.value[1] === 'DD'
                );

            })
            .call(done);
    });

    it('should perform a transition based on a class name', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.transitions.byClass(transitionsTest, 'small', 'big', function(){ done(transitionsTest.className); }, 500);

            }, function (err, result) {

                assert(
                    result.value === 'big'
                );

            })
            .call(done);
    });

    it('should perform a transition based on an inline style', function(done){
        client
            .url(path)
            .executeAsync(function (done) {

                useful.transitions.byRules(transitionsTest, {'left' : '100px'}, function(){ done(transitionsTest.style.left); });

            }, function (err, result) {

                assert(
                    result.value === '100px'
                );

            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});
