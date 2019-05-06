// CODE BEFORE THE HOOKS //

// function getData(){
//     return ["#cc7790", "#2532fs", "#75d709"];
// }
// module.exports =  function(fetch){
//     var fetch = fetch || getData;
//     var palette = fetch();
//     if(!Array.isArray(palette)){
//         throw new Error('Palette is not an array');
//     }
//     return palette;
// }

var fs = require("fs");

function getConfig() {
    return JSON.parse(fs.readFileSync(process.cwd() + "/config.json").toString());
}

module.exports = function() {
    var palette = getConfig().palette;

    if(!Array.isArray(palette)){
        throw new Error('Palette is not an array');
    }

    return palette;
}