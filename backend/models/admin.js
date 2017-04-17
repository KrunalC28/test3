var db = require('../dbconnection');

var admin = {
    
    adduser:function(user, callback){
        return db.query("insert into user values (?,?,?,?,?)",
        [user.username,user.firstname,user.lastname,user.password,user.role], callback);
    },

    getusers:function(callback){
        return db.query("select * from user", callback);
    },
    
    getsearchusers:function(searchText,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from user where username like ?",'%' + searchText + '%', callback);
    },
};

module.exports = admin;