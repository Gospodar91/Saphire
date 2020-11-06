const model_DB_ADD_USER = require("../model/model_add_user");
const helperFunction = require("./helpersForServer/helperFunctions");

exports.register_new_user = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name, phone, second_name } = req.body;

    const existUser = await model_DB_ADD_USER.findOne({
      email,
    });
    if (existUser) {
      await res.status(409).json({
        message: "Email Is already in use",
      });
    }
    const hashPass = await helperFunction.createHashPass(password);
    const newUser = await model_DB_ADD_USER.create({
      email: email,
      password: hashPass,
      first_name,
      last_name,
      phone,
      second_name,
    });
    // const authToken = await helperFunction.createToken(newUser);
    // await model_DB_ADD_USER.findByIdAndUpdate(
    //   newUser._id,
    //   {
    //     $set: {
    //       token: authToken,
    //     },
    //   },
    //   {
    //     new: true,
    //   },
    // );

    return res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      subscription: newUser.subscription,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      phone: newUser.phone,
      second_name: newUser.second_name,
      // token: authToken,
    });
  } catch (error) {
    console.log("error---------------------", error);
    res.status(403).send();
  }
};
