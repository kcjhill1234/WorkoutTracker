const router = require("express").Router();
const db = require("../models/workout");

router.post("/workouts", (req, res) => {
    db.Workout.create({day: new Date(), exercise: []})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})


router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.put("/workouts/:id", (req, res) => {
    const id = req.params.id
    const exercise = req.body
    console.log(exercise)
    db.Workout.findOne({ _id: id })
    .then(dbWorkout => {
        console.log(dbWorkout)
        dbWorkout.exercises.push(exercise)
        dbWorkout.save().then( () => {
            res.json(dbWorkout)
        })    
    }).catch(err => {
        console.log(err)
        res.status(400).json(err);
    })

})

module.exports = router;