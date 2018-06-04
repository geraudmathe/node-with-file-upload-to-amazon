const Picture = require('../models/picture');

function indexRoute(req, res){
  Picture
    .find()
    .then( pictures=>{
      res.render('pictures/index', {pictures});
    });
}

function createRoute(req, res){
  const pictureData = {
    title: req.body.title,
    url: req.file.location,
    fileMetadata: req.file
  };
  Picture.create(pictureData)
    .then(() => res.redirect('/') );

}


module.exports = {
  index: indexRoute,
  create: createRoute,
};
