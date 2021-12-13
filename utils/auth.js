const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    console.log("========Auth Redirect========");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
