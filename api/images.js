const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');
const router = require('express').Router();
const db = require('../server/database');
const Person = require('../models/person');

const filesPath = 'P:\\New folder\\public\\images\\'

const upload = multer({
    storage: multer.diskStorage({
        destination: filesPath,
        filename: function (req, file, cb) {
            crypto.pseudoRandomBytes(16, function callback(err, raw) {
                cb(null, `${raw.toString('hex')}${Date.now()}.${mime.extension(file.mimetype)}`);
            });
        }
    })
});

const upFields = upload.fields([{ name: 'id', maxCount: 1 }, { name: 'image', maxCount: 1 }]);

router.post('/', upFields, function uploadImage(req, res) {
    Person.findById(req.body.id, function findById(err, person) {
        if (err) res.send(err);

        person.picture = `/image/${req.files['image'][0].filename}`;
        console.log(person.picture);

        person.save(function save(err) {
            if (err) res.send(err);

            res.json({
                time: new Date(),
                person
            });
        });
    })
});

router.get('/:name', function getImage(req, res) {
    res.sendFile(`${filesPath}${req.params.name}`);
});

module.exports = router;