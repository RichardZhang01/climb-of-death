const loggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        next();
    };
};

module.exports = loggedIn;