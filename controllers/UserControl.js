const UserModel = require('../models/UserModel');

// Export functions as package
module.exports = {
    // Create Method '/api/user/create'
    create: (req, res) => {
        let user = new UserModel ({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team
        });
        // Updates model
        user.save()
        .then(result => {
            res.json({ success: true, result: result});
        })
        .catch(err => {
            res.json({ success: false, result: err});
        });
    },
    // Update Method '/api/user/update'
    update: (req, res) => {
        // Find current user
        UserModel.update({ _id: req.body._id }, req.body)
        .then(user => {
            if (!user) {
                res.json({ success: false, result: "User does not exist"});
            }
            res.json(user);
        })
        .catch(err => {
            res.json({ success: false, result: err});
        })
    },
    // Get Method '/api/user/get'
    get: (req, res) => {
        UserModel.find()
        .then(result => {
            if (!result) {
                res.json({ success: false, result: "No results found"});
            }
            res.json({ success: true, result: result});
        })
        .catch(err => res.json({ success: false, result: err}));
    },
    // Delete Method '/api/user/delete'
    delete: (req, res) => {
        UserModel.remove({_id: req.body._id})
        .then(result => {
            if (!result) {
                res.json({ success: false, result: "No user was found with given id"});
            }
            res.json({ success: true, result: result});
        })
        .catch(err => res.json({ success: false, result: err}));
    }
}