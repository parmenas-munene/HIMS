const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const doctorSchema = new mongoose.schema({
    firstName: {
        type: String,
        requred: true,
    },
    lastName: {
        type: string,
        required: true,
    },
    idNumber: {
        type: String,
        reuquired: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    specialistIn: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    assignedRoom: {
        type: String,
        required: true
    }

},schemaOptions);

module.exports = mongoose.model('Doctor', doctorSchema);