import mongoose from 'mongoose';

const RatingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  media_id: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Ratings =
  mongoose.models.Ratings || mongoose.model('Ratings', RatingsSchema);

export default Ratings;
