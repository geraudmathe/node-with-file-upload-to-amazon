const express  = require("express");
const router   = express.Router();

const upload = require('../lib/s3-upload');

const pictures = require('../controllers/pictures');

router.route('/')
  .get(pictures.index);

router.route('/pictures')
  .post(upload.single('file'), pictures.create);

module.exports = router;
