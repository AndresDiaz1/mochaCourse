function getData(){
    return ["#cc7790", "#2532fs", "#75d709"];
}
module.exports =  function(){
    var palette = getData();
    if(!Array.isArray(palette)){
        throw new Error('Palette is not an array');
    }
    return palette;
}