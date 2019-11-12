const db = require("../data/dbConfig");

module.exports = { get, getByName, add };

function get() {
  return db("users");
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

function getByName(username) {
  return db("users")
    .where({ username })
    .first();
}
