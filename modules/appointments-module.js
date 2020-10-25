const db = require("../data/dbConfig.js");
module.exports={
    findById
}

async function findById(id) {
    return db('appointments').where({id})
 }