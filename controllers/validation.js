const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

class validations {
  register_new_userValidation = (req, res, next) => {
    console.log("req.body", req.body);
    const rules = Joi.object({
      // _id: Joi.objectId(req.params.id),

      email: Joi.string(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      phone: Joi.string(),
      second_name: Joi.string(),
      password: Joi.string(),
    });
    const validationResult = rules.validate(req.body);
    if (validationResult.error) {
      res.status(400).send({
        message: "missing required  field",
      });
      return;
    }
    next();
  };
  userLogin = (req, res, next) => {
    const rules = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    const validationResult = rules.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json(validationResult.error);
    }
    next();
  };
}
module.exports = new validations();
