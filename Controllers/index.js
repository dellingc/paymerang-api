var data = require('../Data/data.json');

function allData(){
    return data;
}

function indPayee(index){
    return data[index];
}

module.exports = {
    allData,
    indPayee
}