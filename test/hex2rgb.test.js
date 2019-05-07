var hex2rgb = require("../lib/hex2rgb");
var assert = require("assert");
var expect = require("chai").expect;
var sinon = require("sinon");

describe('hex2rgb ', function(){

    describe('Convert method', function() {

        it("Should call parse once", function(done) {
            sinon.spy(hex2rgb, "parse");
            hex2rgb.convert("#ffffff", function(err, result){
                expect(hex2rgb.parse.calledOnce).to.be,true;
                expect(hex2rgb.parse.args[0][0]).to.have.length(6);
                hex2rgb.parse.restore();
                done();
            });
        });

        it("should always return the result of parse", function(done) {
            sinon.stub(hex2rgb, "parse").returns([0,0,200]);
            hex2rgb.convert("#3265a2", function(err, result){
                expect(result).to.deep.equal([0,0,200]);
                hex2rgb.parse.restore();
                done();
            });
        });

        it("should always pass a 6 item array to parse", function(done){
            var mock = sinon.mock(hex2rgb);
            mock.expects("parse").twice().withExactArgs("000000".split(""));
            hex2rgb.convert("#000000", function(err, result){
                hex2rgb.convert("#000", function(err, result){
                    mock.verify();
                    done();
                })
            });
        });

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

    describe('parse method', function(){

    });

});