var mongoClient = require('mongodb').MongoClient;

function _getDB(callback) {
    var url="~~~~";
    mongoClient.connect(url,function (err,db) {
        if(err){
            console.log("链接数据库失败");
            callback(err,null);
            db.close();
            return;
        }
        callback(null,db);
        db.close();
    });
}
// 查
exports.findOne=function (collecionName,json,callback) {
    var arr=[];
    _getDB(function (err, db) {
        db.collection(collecionName).find(json).each(function(err, doc) {
            if(err){
                console.log("查找失败");
                callback(err,null);
                db.close();
                return;
            }
            if (doc !== null) {
                arr.push(doc);
            } else {
                callback(null,arr);
                db.close();
            }
        });
    });
};
