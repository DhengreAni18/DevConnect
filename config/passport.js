const jwtstrategy = require("passport-jwt").Strategy;
const Extractjwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = Extractjwt.fromAuthHeaderAsBearerToken();
opts.SecretORkey = keys.SecretORkey;

module.exports = passport => {
  passport.use(
    new jwtstrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
    })
  );
};
