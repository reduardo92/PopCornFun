import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
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

const Favorite =
  mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema);

export default Favorite;
