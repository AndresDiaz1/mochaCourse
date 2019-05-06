function getData(){
    return ["#cc7790", "#2532fs", "#75d709"];
}
module.exports =  function(fetch){
    var fetch = fetch || getData;
    var palette = fetch();
    if(!Array.isArray(palette)){
        throw new Error('Palette is not an array');
    }
    return palette;
}