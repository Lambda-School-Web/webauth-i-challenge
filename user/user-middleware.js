const bcrypt = require("bcryptjs");

const db = require("./user-model");

module.exports = { restricted };

async function restricted(req, res, next) {
  let { username, password } = req.headers;

  if (username && password) {
    try {
      const user = await db.getByName(username);

      if (user && bcrypt.compareSync(password, user.password)) {
        next();
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    } catch {
      res.status(500).json({ error: "Failed to verify credentials" });
    }
  } else {
    res.status(400).json({ message: "Please provide crendentials" });
  }
}
