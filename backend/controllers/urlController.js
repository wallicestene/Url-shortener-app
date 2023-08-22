const mongoose = require("mongoose")
const Urls = require("../models/urlModel") 
// get
const getUrls = (req,res) => {
    Urls.find()
    .then(urls =>{
        res.status(200).json(urls)
    })
    // catch error
    .catch((err)=>{
        console.log('error', err);
    })
}
module.exports = {
    getUrls
}