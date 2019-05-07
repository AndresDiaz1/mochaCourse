var hex2rgb = require("../lib/hex2rgb");
var assert = require("assert");
var sinon = require("sinon");

describe('hex2rgb ', function(){

    it("should return an error if the value is not a hex code", function(done) {
        hex2rgb.convert("blue", function(error, result){
            assert(error);
            done();
        })
    });

    it('should return a correctly converted rgb value', function(done) {
       hex2rgb.convert("#ffffff", function(error, result){
        assert.strictEqual(error, null);
        assert.deepEqual(result, [255, 255, 255]);
        done();
       }); 
    });

});