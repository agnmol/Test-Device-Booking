var express = require("express");
var router = express.Router();
//StartDate >= NOW() AND

var db = require("../dbms.js");
//console.log(ID);
router.get("/:deviceId", (req, res) => {
  console.log("req ", req.params);

  const availableQuery = `SELECT * FROM Device_Booking.atbl_Booking 
                            WHERE year(StartDate)=year(now()) 
                              AND month(StartDate)=month(now()) 
                              AND day(StartDate)=day(now()) 
                              AND year(FinishDate)=year(now()) 
                              AND month(FinishDate)=month(now()) 
                              AND day(FinishDate)=day(now()) 
                              AND fk_device_ser_nr=${req.params.deviceId}
                              ORDER BY StartDate ASC
                              `;

  db.dbqueryPromise(availableQuery)
    .then(results => {
      console.log("======Available devices======");
      console.log(results);

      res.json({
        success: true,
        bookings: results
      });
    })
    .catch(err => {
      console.log("There was an error getting the Booking information:");
      console.log("---------------------------------");
      console.log(err);
      console.log("---------------------------------");

      res.json({
        success: false
      });
    });
});

module.exports = router;
