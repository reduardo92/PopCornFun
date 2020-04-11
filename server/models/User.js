import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    min: 6,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
