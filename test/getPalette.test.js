var getPalette = require("../lib/getPalette");
var assert = require("assert");

describe('getPalette ', function(){
    it('should return an array with 3 items', function() {
        var palette = getPalette();
        assert(Array.isArray(palette));
        assert.equal(palette.length,3);
    });
})