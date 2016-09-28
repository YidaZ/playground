//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/challenge2';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  }
  else {
    //HURRAY!! We are connected. :)
    // console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('nodes');

    //Create some users
    var node1 = {id: 1, temperature: 22.11};
    var node2 = {id: 2, temperature: 21.91};
    var node3 = {id: 3, temperature: 20.71};

    // Insert some users
    collection.insert([node1,node2,node3], function (err, result) {
      // if (err) {
      //   console.log(err);
          // console.log('Connection established to', url);

    // Get the documents collection
    var collection = db.collection('nodes');

    //Create some users
    var node1 = {id: 1, temperature: 22.11};
    var node2 = {id: 2, temperature: 21.91};
    var node3 = {id: 3, temperature: 20.71};

    // Insert some users
    collection.insert([node1,node2,node3], function (err, result) {
      // if (err) {
      //   console.log(err);
      // } else {
      //   console.log('Inserted are:', result.length, result);
      // }

      //Close connection
      db.close();
    });
  }
});
