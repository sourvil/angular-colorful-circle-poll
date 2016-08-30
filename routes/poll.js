var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

var express = require('express');
var router = express.Router();



router.route('/')
    .post(function (req, res) {
        console.log('poll is being saved');
        var poll = new Poll();
        poll.subject = req.body.subject;
        poll.username = req.body.username;

        poll.save(function (err, poll) {
            if (err) {
                console.log('post error: ' + err);
                return res.send(500, err);
            }
            console.log(req.body.subject + ' is saved');
            return res.json(poll);
        });
    })

    .get(function (req, res) {
        Poll.find(function (err, subjects) {
            if (err)
                return res.send(500, err);
            return res.send(subjects);
        });
    });

router.route('/g/')

    .get(function (req, res) {
        Poll.aggregate([
            {
                $project: {
                    $subject: { subject: "$subject" }
                }
            }, {
                $group: {
                    _id: "$subject",
                    users: { $sum: 1 }
                }
            }
        ], function (err, result) {
            if (err) {
                console.log("Hata:" + err);
            } else {
                res.json(result);
            }
        });
    })
    ;

module.exports = router;