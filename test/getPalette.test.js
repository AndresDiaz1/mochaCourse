var getPalette = require("../lib/getPalette");
var assert = require("assert");
var expect = require("chai").expect;

describe('getPalette ', function(){
    it('should throw an error if palette is not an array', function(done){
        var notArray = function () {
            getPalette(process.cwd() + '/test/fixtures/config-palette-non-array.json');
        }
        expect(notArray).to.throw (/Palette is not an array/);
        done();

    });

    it('should return an array with 3 items by default', function() {
        var palette = getPalette();
        assert(Array.isArray(palette));
        assert.equal(palette.length,3);
    });
})