import auth from '../../server/middleware/auth';
import connectDB from '../../server/config/db';
import { RatingValidation } from '../../server/Validation';

import Ratings from '../../server/models/Ratings';

export default auth(async (req, res) => {
  await connectDB();

  const { method, query } = req;

  const { media_id, rating } = req.body;

  const { error } = RatingValidation(req.body);

  switch (method) {
    // @route   GET api/ratings
    // @desc    Get all Ratings Media
    // @access  Private
    case 'GET':
      try {
        const ratings = await Ratings.find({ user: req.user.id }).sort({
          date: -1,
        });
        res.json(ratings);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'POST':
      // @route   POST api/ratings
      // @desc    add new ratings
      // @access  Private

      if (error) return res.status(400).json({ msg: error.details[0].message });

      try {
        const newRating = new Ratings({
          media_id,
          rating,
          user: req.user.id,
        });

        const ratings = await newRating.save();

        res.json(ratings);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'PUT':
      // @route   PUT api/ratings/:id
      // @desc    Update ratings
      // @access  Private

      // Build ratings object
      if (error) return res.status(400).json({ msg: error.details[0].message });

      const ratingsFields = {};
      if (media_id) ratingsFields.media_id = media_id;
      if (rating) ratingsFields.rating = rating;
      try {
        let ratings = await Ratings.findById(query.id);

        if (!ratings) return res.status(400).json({ msg: 'Ratings not found' });

        // Make sure user owns ratings
        if (ratings.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: 'Not authorized' });
        }

        ratings = await Ratings.findByIdAndUpdate(
          query.id,
          { $set: ratingsFields },
          { new: true }
        );

        res.json({ ratings, msg: 'Rating updated' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;

    case 'DELETE':
      // @route   DELETE api/ratings/:id
      // @desc    Delete ratings
      // @access  Private
      try {
        let ratings = await Ratings.findById(query.id);

        if (!ratings) return res.status(400).json({ msg: 'Ratings not found' });

        // Make sure user owns ratings
        if (ratings.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: 'Not authorized' });
        }

        await Ratings.findByIdAndRemove(query.id);

        res.json({ msg: 'Ratings removed' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      console.log('defa', method, query);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
});
