const mongoose = require('mongoose');
const { shcemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const branchSchema = new mongoose.schema({
    name :{
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
        required: true,
    }
}, shcemaOptions);

module.exports = mongoose.model('Branch', branchSchema);