const firstAnchEleID = document.getElementsByTagName("html")[0].id;
console.log(`Current page is ${firstAnchEleID}`);
// var { getAllData } = require('./GET_Entries');

if (document.getElementById('indexPage')) {
    alert('Welcome to the Index Page');
} else if (document.getElementById('dataPage')) {
    alert('Welcome to the Data Page');
    // const rawData = getAllData();
    // console.log(rawData);
}