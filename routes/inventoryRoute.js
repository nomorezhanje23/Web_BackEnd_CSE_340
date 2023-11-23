// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/detail/:inventoryId", utilities.handleErrors(invController.buildByInventoryId));

router.get("/", utilities.handleErrors(invController.buildManagement));
// Route to build add-classification view
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification));
// router.get("/add-classification", invController.buildAddClassification);
// Route to build add-inventory view
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory));


// Route to process the add new classification data and send data to the database
// router.post(
//     "/add-classification",
//     invValidate.classificationRules(),
//     invValidate.checkClassificationData,
//     utilities.handleErrors(invController.addClassification)
// )

module.exports = router;

