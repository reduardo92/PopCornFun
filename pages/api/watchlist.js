import auth from '../../server/middleware/auth';
import connectDB from '../../server/config/db';
import { mediaValidation } from '../../server/Validation';
import Watchlist from '../../server/models/Watchlist';

export default auth(async (req, res) => {
  await connectDB();
  const { method } = req;

  switch (method) {
    // @route   GET api/watchlist
    // @desc    Get all Watchlist Media
    // @access  Private
    case 'GET':
      try {
        const watchlist = await Watchlist.find({ user: req.user.id }).sort({
          date: -1,
        });
        res.json(watchlist);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'POST':
      // @route   POST api/watchlist
      // @desc    add new watchlist
      // @access  Private

      const { error } = mediaValidation(req.body);
      if (error) return res.status(400).json({ msg: error.details[0].message });

      const { media, media_id } = req.body;

      try {
        let checkMedia = await Watchlist.findOne({ media_id });

        if (checkMedia) {
          return res.status(400).json({ msg: 'Media already added' });
        }

        const newwatchlist = new Watchlist({
          media,
          media_id,
          user: req.user.id,
        });
        const watchlist = await newwatchlist.save();

        res.json(watchlist);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
      break;
    case 'DELETE':
      // @route   DELETE api/watchlist/:id
      // @desc    Delete watchlist
      // @access  Private
      try {
        let watchlist = await Watchlist.findById(req.query.id);

        if (!watchlist)
          return res.status(400).json({ msg: 'Watchlist not found' });

        // Make sure user owns watchlist
        if (watchlist.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: 'Not authorized' });
        }

        await Watchlist.findByIdAndRemove(req.query.id);

        res.json({ msg: 'Watchlist removed' });
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
