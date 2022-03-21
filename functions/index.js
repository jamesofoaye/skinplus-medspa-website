const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendSMS = functions.pubsub.schedule("every 1 minutes")
    .onRun((context) => {
      //console.log("This will be run every 1 minutes!");
      functions.logger.info("This will be run every 1 minutes!",
          {structuredData: true}
      );
      return null;
    });
