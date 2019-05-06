var getPalette = require("../lib/getPalette");
var assert = require("assert");
var fs = require("fs");
var configPath = process.cwd() + '/config.json'

function writeConfig(config, callback){
    fs.writeFile(configPath, JSON.stringify(config), callback);
}

describe('getPalette ', function(){

    var config = {};

    before(function(done){
        fs.readFile(configPath, function(err, contents){
            config = JSON.parse(contents.toString());
            done();
        });
    });

    afterEach(function (done){
        writeConfig(config, done);
    });

    it('should throw an error if palette is not an array', function(done){
        writeConfig({ palette: "string"}, function(err){
            assert.throws(getPalette , /Palette is not an array/);
            done();
        });
    });

    it('should return an array with 3 items by default', function() {
        var palette = getPalette();
        assert(Array.isArray(palette));
        assert.equal(palette.length,3);
    });
})