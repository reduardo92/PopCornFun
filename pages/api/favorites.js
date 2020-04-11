import auth from '../../server/middleware/auth';
import connectDB from '../../server/config/db';
import { mediaValidation } from '../../server/Validation';
import Favorite from '../../server/models/Favorite';

export default auth(async (req, res) => {
  await connectDB();

  const { method } = req;

  switch (method) {
    // @route   GET api/favorite
    // @desc    Get all Favorite Media
    // @access  Private
    case 'GET':
      try {
        const favorite = await Favorite.find({ user: req.user.id }).sort({
          date: -1,
        });
        res.json(favorite);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'POST':
      // @route   POST api/favorite
      // @desc    add new favorite
      // @access  Private

      const { error } = mediaValidation(req.body);
      if (error) return res.status(400).json({ msg: error.details[0].message });

      const { media, media_id } = req.body;

      try {
        let checkMedia = await Favorite.findOne({ media_id });

        if (checkMedia) {
          return res.status(400).json({ msg: 'Media already added' });
        }

        const newFavorite = new Favorite({ media, user: req.user.id });

        const favorite = await newFavorite.save();

        res.json(favorite);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'DELETE':
      // @route   DELETE api/favorite/:id
      // @desc    Delete favorite
      // @access  Private
      try {
        let favorite = await Favorite.findById(req.query.id);

        if (!favorite)
          return res.status(400).json({ msg: 'Favorite not found' });

        // Make sure user owns favorite
        if (favorite.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: 'Not authorized' });
        }

        await Favorite.findByIdAndRemove(req.query.id);

        res.json({ msg: 'Favorite removed' });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    default:
      console.log('defa', method, req.params);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
});
