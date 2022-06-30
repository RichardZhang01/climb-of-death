const users = require('express').Router();
const { User } = require('../../models');

users.post('/', async (req, res) => {

  //sign up
    try {
      const dbUserData = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
//login
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

});

users.post('/login', async (req, res) => {
    
    try {
        const dbUserData = await User.findOne({
          where: {
            username: req.body.username,
          },
        });
    
        if (!dbUserData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password. Please try again!' });
          return;
        }
    
        const validPassword = await dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password. Please try again!' });
          return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;

            res
              .status(200)
              .json({ user: dbUserData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(500).json(err);
    };
    
});

users.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = users;