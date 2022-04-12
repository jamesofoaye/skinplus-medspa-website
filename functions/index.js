const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
const rp = require('request-promise');
const { getFirestore } = require('firebase-admin/firestore');
const moment = require('moment');

const db = getFirestore();

//send sms everyday at 8am
exports.send_SMS_At_Eight_Am = functions.pubsub.schedule("every day 8:00")
    .onRun(async(context) => {
      functions.logger.info("This will be run everyday at 8:00am!",
        {structuredData: true}
      );

      //send appointment day reminder message
      await getAppointments()

      return null;
    });

//send sms everyday at 1:00pm
exports.send_SMS_At_One_Pm = functions.pubsub.schedule("every day 13:00")
    .onRun(async(context) => {
      functions.logger.info("This will be run everyday at 1:00pm!",
          {structuredData: true}
      );

      //send 2 days reminder message
      await getAppointmentsForOnePmSMS()

      return null;
    });

//get all appointments from firestore and send message at 8:00am
const getAppointments = async () => {
  const snapshot = await db.collection("appointment").get();
  
  snapshot.forEach((doc) => {
    //Appointment day message
    const message = `Hello ${doc.data().name}, this is a reminder that you have ${doc.data().services.map((service) => service)} appointment at SkinPlus Medspa Today at
      ${moment(doc.data().nextAppointmentDate).format('LT')}. Visit ${`https://skinplusofficial.com/appointment/${doc.data().userId}`} to Confirm, Cancel or Reschedule your appointment. See you soon!`;

    const conditionsToSend = async() => { 
      if(moment(doc.data().nextAppointmentDate).format('L') ===  moment().format('L')) {
        await sendMessage(doc.data().phone, message);
        functions.logger.info("Appointment day reminder worked",
          {structuredData: true}
        );
        functions.logger.info(`Phone number: ${doc.data().phone} and message: ${message}`,
          {structuredData: true}
        );
      }
    }

    conditionsToSend()
  });
}

//get all appointments from firestore and send message at 1:00pm
const getAppointmentsForOnePmSMS = async () => {
  const snapshot = await db.collection("appointment").get();
  
  snapshot.forEach((doc) => {

    let today = new Date();

    const formattedNextAppointmentDate  = moment(doc.data().nextAppointmentDate).format('L')

    const formattedToday = moment(today, "MM-DD-YYYY").add(2, 'days').format('L')

    //Two days before appointment
    const twoDaysBeforeReminder = `Hello ${doc.data().name}, this is a reminder that you have ${doc.data().services.map((service) => service)} appointment at SkinPlus Medspa on 
      ${moment(doc.data().nextAppointmentDate).calendar()}. Visit ${`https://skinplusofficial.com/appointment/${doc.data().userId}`} to Confirm, Cancel or Reschedule your 
      appointment. See you soon!`;

    const conditionsToSendOnePmSMS = async() => { 
      if(formattedToday === formattedNextAppointmentDate) {
        await sendMessage(doc.data().phone, twoDaysBeforeReminder)
        functions.logger.info("2 days appointment reminder worked!",
          {structuredData: true}
        );
        functions.logger.info(`Phone number: ${doc.data().phone} and message: ${twoDaysBeforeReminder}`,
          {structuredData: true}
        );
      }
    }

    conditionsToSendOnePmSMS()
  });
}

//send SMS function
const sendMessage = (recipientNumber, message) => {
  return rp({
    method: 'POST',
    uri: `https://api.dawurobo.com/send_sms?sender=SkinPlus&numbers=${recipientNumber}&message=${message}&validate=false`,
    body: {
      text: message,
    },
    json: true,
  });
}