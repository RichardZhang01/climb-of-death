const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/homepage');
    } else {
        next();
    }
};

module.exports = withAuth;