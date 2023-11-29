const utilities = require(".")
const { body, validationResult } = require("express-validator")
const validate = {}

validate.additionRules = () => {
    return [
      // inv is required and must be string
      body("inv_make")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Please fill out this field."), // on error this message is sent.
  
      // model is required and must be string
      body("inv_model")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Please fill out this field."), // on error this message is sent.

      // description, is required and must be string
      body("inv_description")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Please fill out this field."), // on error this message is sent.

        // image, is required and must be string
      body("inv_image")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Please fill out this field."), // on error this message is sent.

     // inv_thumbnail, is required and must be string
     body("inv_thumbnail")
     .trim()
     .isLength({ min: 3 })
     .withMessage("Please fill out this field."), // on error this message is sent.

    // inv_price, is required and must be string
    body("inv_price")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Whole and decimal numbers only, no spaces."), // on error this message is sent.

    // inv_year, is required and must be string
    body("inv_year")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please fill out this field."), // on error this message is sent.

    // inv_miles, is required and must be string
    body("inv_miles")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Whole numbers only, no spaces & decimals."), // on error this message is sent.

    // description, is required and must be string
    body("inv_color")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Please fill out this field."), // on error this message is sent.
    ]
  }

  /* ******************************
 * Check data and return errors or continue to registration
 * ***************************** */
validate.checkAddData = async (req, res, next) => {
    const { inv_make, inv_model, inv_description, inv_image, inv_thumbnail, inv_price, inv_year, inv_miles, inv_color } = 
    req.body
    let errors = []
    errors = validationResult(req)
    if (!errors.isEmpty()) {
      let nav = await utilities.getNav()
      res.render("./inventory/add-inventory", {
        errors,
        title: "Add New Inventory",
        nav,
        inv_make,
        inv_model, 
        inv_description, 
        inv_image, 
        inv_thumbnail, 
        inv_price, 
        inv_year,
        inv_miles, 
        inv_color
      })
      return
    }
    next()
  }


  module.exports = validate