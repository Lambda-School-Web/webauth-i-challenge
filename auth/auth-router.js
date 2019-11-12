const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../user/user-model");
const authMiddleware = require("./auth-middleware");

router.post("/login", authMiddleware.validateUser, async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await db.getByName(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({ message: `Welcome ${username}` });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch {
    res.status(500).json({ error: "Failed to verify user" });
  }
  const hash = bcrypt.compareSync(password);
});

router.post("/register", authMiddleware.validateUser, async (req, res) => {
  let { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 12);
  password = hash;

  try {
    const user = await db.add({ username, password });

    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: "Failed to register user" });
  }
});

module.exports = router;
