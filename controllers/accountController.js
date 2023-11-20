/*   *******************************************************
 *  ACCOUNT CONTROLLER
 *  Unit 4, deliver login view activity
 *   *************************************************** */
const utilities = require("../utilities/")

/*   *******************************************************
 *  Deliver login view
 *  Unit 4, deliver login view activity
 *   *************************************************** */
async function buildLogin(req, res, next) {
    let nav = await utilities.getNav()
    res.render("account/login", {
      title: "Login",
      nav,
    })
  }
  
  module.exports = { buildLogin }