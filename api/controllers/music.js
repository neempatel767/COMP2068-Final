const Music = require('../models/music');

exports.index = async (req, res, next) => {
  try {
    const music = await Music.find();
    res.status(200).json(music);
  }
  catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {

    const music = await Music.findById(req.params.id);

    res.status(200).json(music);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { artist, title, genre
    } = req.body;

    const music = await Music.create({
    artist: artist,
    title: title,
    genre: genre
  });
  res.status(200).json({ message: "Music was created successfully", title: music});
  } catch (error) {
    next(error);
  } 
};

exports.update = async (req, res, next) => {
  try {
      const { _id, artist, title, genre } = req.body;

      const music = await Music.findOneAndUpdate({ _id: _id}, {
        artist: artist,
        title: title,
        genre:genre
      });
      res.status(200).json({ message: "Music details updated successfully", title: music});
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    await Music.findOneAndDelete({ _id: _id });

    res.status(200).json({ message: "Music was deleted successfully" });
  } catch (error) {
    next(error);
  }
};