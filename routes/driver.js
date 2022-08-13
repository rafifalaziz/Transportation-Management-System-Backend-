const express = require("express");
const {auth} = require("../middleware");

const router = express.Router();
const {addDriver, getDrivers, editDriver, searchDriverByName} = require("../controller/driver")


router.get('/search', auth.transporterRole, searchDriverByName)
router.post('/add', auth.transporterRole, addDriver);
router.put('/edit/:id', auth.transporterRole, editDriver);
router.get('/', auth.transporterRole, getDrivers)


module.exports = router;