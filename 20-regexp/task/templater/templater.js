//Work !!!
function templater(temp, dataObj) {

    var array = temp.match(/([^\$\{\}])([a-z ]*)(?=})|(!)|([a-z ])+/ig);
    var string = "";
    for(var i =0; i < array.length; i++){
        if(dataObj.hasOwnProperty(array[i])){
            string +=dataObj[array[i]];
        }else{
            string +=array[i];
        }
    }
    return string.trim();
}