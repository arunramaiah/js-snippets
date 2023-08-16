const recordService = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
    const { params : { workoutId }} = req;
    if (!workoutId) {
        return;
    }
    const recordForWorkout = recordService.getRecordForWorkout(workoutId);
    res.send({ status: "OK", data: recordForWorkout });
};

module.exports = {
    getRecordForWorkout,
};