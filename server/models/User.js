const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  email: { type: String, required: true },
  image: { type: String, required: true, default: 'http://greenlea.ru/Articles-Directory/Online-Dating-the-First-Step-Is-Your-Profile/i0099rp.jpg'}
  campaign: [{ type: mongoose.Types.Schema.ObjectId, ref: 'Campaign' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
