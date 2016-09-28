//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/challenge1';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  }
  else {

    var collection = db.collection('nodes');

    collection.find({id:2}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        //console.log(result["temperature"]);
        var parsedData = JSON.parse(result);
        console.log(parsedData.temperature);

      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }


    var collection = db.collection('nodes');

    collection.find({id:2}).toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
        //console.log(result["temperature"]);
//         var parsedData = JSON.parse(result);
//         console.log(parsedData.temperature);

      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }

      //Close connection
      db.close();
    });
  }
});
