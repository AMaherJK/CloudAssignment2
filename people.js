const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        emailadress: {
            type: String,
            required: true
        }
    });

    const People = mongoose.model('People', peopleSchema);

    module.exports = People;