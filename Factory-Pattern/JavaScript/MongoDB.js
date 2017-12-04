var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var obj = { name: "Company Inc", address: "Highway 37" };
  
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
    
});