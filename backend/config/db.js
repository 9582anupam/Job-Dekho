const mongoose = require('mongoose');

// Retry connection parameters
const maxRetries = 5 ;
let retries = 0;


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{

        });
        console.log('MongoDB connected successfully');
    } catch(err){
        console.error(`Error connecting to MongoDB: ${err.message}`);
        retries += 1;

        if(retries < maxRetries){
            console.log('Retrying to connect... (${retries}/${maxRetries})');
            setTimeout(connectDB,5000);//retry after 5 seconds
        }else{
            console.error('Exceeded maximum retries. Exiting...');
            process.exit(1);//exit process with failure
        }
    }
};

// handling MongoDB reconnection 
mongoose.connection.on('disconnected',()=>{
    console.log('MongoDB disconnected . Attempting to reconnect...');
    connectDB();
});

mongoose.connection.on('reconnected',()=>{
    console.log('MongoDB reconnected');
});

module.exports = connectDB

