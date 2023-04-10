const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        connect = await mongoose.connect(process.env.CONECTIONSTRING);
        console.log('Database Connected: ',
            connect.connection.host,
            connect.connection.name);
    } catch (ex) {
        console.log(ex);
        process.exit(1);
    }
}

module.exports = connectDb;