const bcrypt = require("bcrypt");

const User = require("../models/User");
const Session = require("../models/Session");

async function show(req, res) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.getOneById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err });
  }
}

async function register(req, res) {
  try {
    const data = req.body;

    // Generate a salt with a set time cost
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

    //   Hash the password
    data.user_password = await bcrypt.hash(data.user_password, salt);

    //   Send the username and password off to make a new user
    const result = await User.create(data);

    //   Send it back
    res.status(201).send(result);
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

async function login(req, res) {
  try {
    const { username, user_password } = req.body;
    // Try and get that user
    const user = await User.getOneByUsername(username);
    // Check if the password submitted is the correct one
    const authenticated = await bcrypt.compare(
      user_password,
      user.user_password
    );
    if (authenticated) {
      // If password correct

      // Generate a session for user when they log in
      const newSession = await Session.create(user.id);
      res.status(200).json({
        authenticated: true,
        session: newSession.session_token,
        account_id: user.account_id,
      });
    } else {
      // If password is incorrect
      throw new Error("Incorrect credentials");
    }
  } catch (err) {
    res.status(401).json({ error: err });
  }
}

async function logout(req, res) {
  try {
    const session = await Session.getOneByAccountId(req.params.id);
    const user = await User.getOneById(req.params.id);
    const resp = await session.destroy();
    res.status(200).json({ username: user.username });
  } catch (err) {
    res.status(404).json({ err });
  }
}

module.exports = {
  show,
  register,
  login,
  logout,
};
