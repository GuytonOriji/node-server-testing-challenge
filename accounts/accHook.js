const db = require("../data/db-config")

module.exports = {
    getUsers,
    del_
}

function getUsers(id){

	if(id){
	 return db('users')
    .where({id})
    .first()
	}else{
	return db("users")
	}
}



function del_(id){
    return db("users")
    .where({id})
    .del()
}