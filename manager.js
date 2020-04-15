exports.siPansionCompleted = function(montantPaye){
    var pansion = 1000000;
    if(montantPaye == pansion){
        return true;
    }else {
        return false;
    }
}
exports.recuPansionTotal = function (){
    return 1000000;
}