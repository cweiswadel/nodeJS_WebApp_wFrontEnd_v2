var getEntriesURL = exports.getEntriesURL = 'http://localhost:3000/entries';

const dataOutEle = exports.dataOutEle = document.getElementById('getData');

var cbGetDataFN = exports.cbGetDataFN = async (getURL, eleToUpdate) => {
    var getData = await require('./GET');
    var dataRet = await getData(getURL)
        .then((res) => {
            console.log(res);
            // dataOutEle.appendChild(dataOutEle_2);
            outRes = JSON.stringify(res);
            eleToUpdate.textContent = outRes;
            return outRes;
        })
        .catch((error) => {
            console.error(error);
            eleToUpdate.textContent = `${error}`;
        })    
}

var data = cbGetDataFN(getEntriesURL,dataOutEle);
var dataChild = document.createElement('p');
dataOutEle.appendChild(dataChild);
dataChild.textContent = data;
console.log(dataChild.textContent);

// var sortASCOpt = require('./sortASCQueryParam');
var queryParamChooser = require('./queryParams');
// queryParamChooser.onCheckFNSortASC(), queryParamChooser.onCheckFNSortDESC();
queryParamChooser.queryParamToggles();

var executeGET = require('./executeGET');
executeGET();
