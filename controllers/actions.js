const { Error } = require("mongoose");
const model_DB_USER_DATABASE = require("../model/model_user_databaser");

const helperFunction = require("./helpersForServer/helperFunctions");

exports.register_new_user = async (req, res, next) => {
  try {
    const { email, password, first_name, last_name, phone, second_name } = req.body;

    const existUser = await model_DB_USER_DATABASE.findOne({
      email,
    });
    if (existUser) {
      await res.status(409).json({
        message: "Email Is already in use",
      });
    }
    const hashPass = await helperFunction.createHashPass(password);
    const newUser = await model_DB_USER_DATABASE.create({
      email: email,
      password: hashPass,
      first_name,
      last_name,
      phone,
      second_name,
    });
    const isValidUser = await model_DB_USER_DATABASE.findOne({
      email,
    });
    const authToken = await helperFunction.createToken(isValidUser);
    await model_DB_USER_DATABASE.findByIdAndUpdate(
      isValidUser._id,
      {
        $set: {
          token: authToken,
        },
      },
      {
        new: true,
      },
    );
    return res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      subscription: newUser.subscription,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      phone: newUser.phone,
      second_name: newUser.second_name,
      token: authToken,
    });
  } catch (error) {
    console.log("error---------------------", error);
    res.status(403).send();
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const isValidUser = await model_DB_USER_DATABASE.findOne({
    email,
  });
  if (!isValidUser) {
    res.status(401).json({
      message: "incorrect email or password",
    });
    throw new Error("Email or password incorrect");
  }
  const isPassValid = await helperFunction.comparePass(password, isValidUser.password);

  if (!isPassValid) {
    res.status(401).json({
      message: "incorrect email or password",
    });
    throw new Error("Email or password incorrect");
  }
  const authToken = await helperFunction.createToken(isValidUser);
  await model_DB_USER_DATABASE.findByIdAndUpdate(
    isValidUser._id,
    {
      $set: {
        token: authToken,
      },
    },
    {
      new: true,
    },
  );

  return res.status(200).json({
    id: isValidUser._id,
    email: isValidUser.email,
    // subscription: isValidUser.subscription,
    token: authToken,
  });
};
exports.logOutUser = async (req, res, next) => {
  const id = req.body.id;
  if (!id) {
    res.status(404).json({
      message: "User not found",
    });
    throw new Error("User not found");
  }
  const user = await model_DB_USER_DATABASE.findByIdAndUpdate(id, {
    $set: {
      token: null,
    },
  });

  return res.status(200).send("logout user");
};
