const express = require("express");
const router = express.Router();
const db_Actions = require("../controllers/actions");
const validations = require("../controllers/validation");
console.log("RUTE---------------------");

// router.get("/", db_Actions.getProducts);
// router.get("/:contactId", db_Actions.findContact);
router.post("/add_new_user", validations.register_new_userValidation, db_Actions.register_new_user);
router.post("/login_user", validations.userLogin, db_Actions.loginUser);
router.post("/logout_user", validations.userLogOut, db_Actions.logOutUser);
// router.delete('/:contactId',validations.validateRequest,db_Actions.deleteContact)

// router.patch(
//     "/:contactId",
//     validations.validateRequest,
//     db_Actions.updateContact
//   );

module.exports = router;
