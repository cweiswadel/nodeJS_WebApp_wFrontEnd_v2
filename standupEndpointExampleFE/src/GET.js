module.exports = async function getData(reqURL){
    var axios = require ('axios');
    try {
        const response = await axios.get(reqURL);
        let data = await response.data
        return await data;
    } catch(err){
        console.error(err);
        return await err
    }
}
