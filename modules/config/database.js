const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

 //Removes the warning with promises
 mongoose.Promise = global.Promise;
 mongoose.set('useCreateIndex', true);
 //Connect the db with the url provided
 try {
     mongoose.connect(process.env.DB_URL,{ useNewUrlParser: true })
 } catch (err) {
     mongoose.createConnection(process.env.DB_URL,{
       useNewUrlParser: true
     },
     {
       poolSize: 4
     })
 }

 mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', e => {
     throw e;
 })

  
