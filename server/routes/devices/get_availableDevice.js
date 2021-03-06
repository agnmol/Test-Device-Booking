var express = require('express');
var router = express.Router();

var db = require('../dbms.js');



router.get('/', (req, res) => {
    const availableQuery = "SELECT * FROM Device_Booking.atbl_Device WHERE Available='1';";

    db.dbqueryPromise(availableQuery).then(results => {;
        //console.log("======Available devices======");
        //console.log(results);

        res.json({
            success: true,
            devices: results
        });
    }).catch(err => {
        console.log("There was an error getting the offices:");
        console.log("---------------------------------");
        console.log(err);
        console.log("---------------------------------");

        res.json({
            success: false,
        });
    });
});

module.exports = router;