var getPalette = require("../lib/getPalette");
var assert = require("assert");

describe('getPalette ', function(){
    it('should throw an error if palette is not an array', function(){
        assert.throws(getPalette, /is not array/);
    });

    it('should return an array with 3 items', function() {
        var palette = getPalette();
        assert(Array.isArray(palette));
        assert.equal(palette.length,3);
    });
})