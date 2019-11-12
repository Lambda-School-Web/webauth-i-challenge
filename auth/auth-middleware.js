module.exports = { validateUser };

function validateUser(req, res, next) {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      message: "Please provide the required username and password fields"
    });
  } else {
    next();
  }
}
