module.exports = executeGET = () => {
    const executeGETButton = document.getElementById('refreshGET');
    var queryHTML = document.getElementById('curQueryParam');

    executeGETButton.addEventListener('click', async () => {
        var populateData = require('./populateData');
        var oldURL = populateData.getEntriesURL;
        var newURL;
        var queryParamObj = {};

        Object.assign(queryParamObj, queryHTML.dataset); //assigning an object with params from html based on selections in FE/DOM
        const params = new URLSearchParams(queryParamObj); //building params in ?sort=ASC&value=2 format
        const queryStr = params.toString();
        if (queryStr.length == 0) { //checking to see if no params exist
            newURL = oldURL;
        } else { //scenario for when params exist
            newURL = `${oldURL}?${queryStr}`;
        }
        await populateData.cbGetDataFN(newURL, populateData.dataOutEle); //to execute the get Call
    })
}