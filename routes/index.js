const router = require("express").Router();
const path = require("path");

const api = require("./api.routes");

router.use("/api", api);

router.get("/", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"))
});
router.get("/exercise", (req, res) => {
    res.sendFile(path.resolve("public", "exercise.html"))
})
router.get("/stats", (req, res) => {
    res.sendFile(path.resolve("public", "stats.html"))
})




module.exports = router;