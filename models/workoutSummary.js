const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = Schema({
    date: {
        type: Number,
    },
    totalDuration: {
        type: Number,
    },
    numExercise: {
        type: Number
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout