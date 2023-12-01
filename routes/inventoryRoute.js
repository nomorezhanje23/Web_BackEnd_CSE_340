// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities")
const addValidate = require('../utilities/management-validation')


// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/detail/:inventoryId", utilities.handleErrors(invController.buildByInventoryId));

router.get("/", utilities.handleErrors(invController.buildManagement));
// Route to build add-classification view
router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification));
// router.get("/add-classification", invController.buildAddClassification);
// Route to build add-inventory view
router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory));
//Process the Json data
router.get("/getInventory/:classification_id", 
  utilities.handleErrors(invController.getInventoryJSON))

// add classification ------------------------------------------------------undo here
router.post("/add-classification", 
// addValidate.classadditionRules(),
// addValidate.checkclassData,
 utilities.handleErrors(invController.addClassification))

/*   *******************************************************
 *  Process Registration
 *  Unit 4, Process registration activity
 *   ****************************************************/

// Process the registration data--------------------------------------------undo here
router.post(
    "/add-inventory",
//     addValidate.additionRules(),
//     addValidate.checkAddData,
    utilities.handleErrors(invController.addInventory)
 )



// Route to process the add new classification data and send data to the database (Siya so don't chanje anything)
// router.post(
//     "/add-classification",
//     invValidate.classificationRules(),
//     invValidate.checkClassificationData,
//     utilities.handleErrors(invController.addClassification)
// )

module.exports = router;

