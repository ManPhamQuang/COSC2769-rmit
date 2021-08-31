const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const User = require("../model/User");
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");
const { v4: uuidv4 } = require("uuid");
const client = require("../util/oAuthClient2");
const createToken = async id =>
  await promisify(jwt.sign)({ id }, process.env.SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

const extractUserData = user => {
  const data = {
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
  };
  if (user.role === "expert") data.description = user.description;
  return data;
};

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  const token = await createToken(user.id);
  const userData = extractUserData(user);
  res.status(201).json({
    status: "success",
    data: {
      user: userData,
      token,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  if (!req.body.email || !req.body.password)
    return next(
      new AppError("Please provide email and password to login", 400)
    );
  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );
  if (!user || !(await user.comparePassword(req.body.password, user.password)))
    return next(new AppError("Incorrect email or password", 400));
  const token = await createToken(user.id);
  const userData = extractUserData(user);
  res.status(200).json({
    status: "success",
    data: {
      user: userData,
      token,
    },
  });
});

exports.isAuthenticated = catchAsync(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Please login to access this route", 401));
  }
  const decodedToken = await promisify(jwt.verify)(token, process.env.SECRET);
  const user = await User.findById(decodedToken.id);
  req.user = user;
  next();
});

exports.limitToOnly = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(`You are not allowed to access this route`, 403)
      );
    }
    next();
  };
};

exports.loginWithGoogle = catchAsync(async (req, res, next) => {
  let decodedToken;
  try {
    decodedToken = await client.verifyIdToken({ idToken: req.body.id });
  } catch (error) {
    return next(new AppError("Invalid or missing token from body", 400));
  }
  let user = await User.findOne({ gId: decodedToken.payload.sub });
  const generatedPw = uuidv4();
  if (!user) {
    user = await User.create({
      email: decodedToken.payload.email,
      gId: decodedToken.payload.sub,
      name: decodedToken.payload.name,
      avatar:
        decodedToken.payload.picture ||
        "https://res.cloudinary.com/dybygufkr/image/upload/c_thumb,w_200,g_face/v1593000869/avatar_q2ysxd.jpg",
      password: generatedPw,
      passwordConfirm: generatedPw,
    });
  }
  const token = await createToken(user.id);
  const data = extractUserData(user);
  res.status(200).json({
    status: "success",
    data: {
      user: data,
      token,
    },
  });
});
