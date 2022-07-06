const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const patientSchema = new mongoose.schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    idNumber: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unque: true
    },
    address: {
        type: String,
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor',
    }

},schemaOptions);

module.exports = mongoose.model('Patient', patientSchema);