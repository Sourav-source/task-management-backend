// Check if user is admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // user is admin, continue
  } else {
    res.status(403).json({
      message: "Access denied. Admin privileges required.",
    });
  }
};

module.exports = { admin };
