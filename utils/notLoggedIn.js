const loggedIn = (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect('/gamepage');
    } else {
        next();
    };
};

module.exports = loggedIn;