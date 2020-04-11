import mongoose from 'mongoose';

const WatchlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  media_id: {
    type: Number,
  },
  media: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Watchlist =
  mongoose.models.Watchlist || mongoose.model('Watchlist', WatchlistSchema);

export default Watchlist;
