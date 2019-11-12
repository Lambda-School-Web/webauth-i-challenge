const router = require("express").Router();
const userMiddleware = require("./user-middleware");

const db = require("./user-model");

router.get("/", userMiddleware.restricted, async (req, res) => {
  try {
    const users = await db.get();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

module.exports = router;
