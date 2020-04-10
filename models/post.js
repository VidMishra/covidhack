const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    phone: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    service_type: {
      type: String,
      required: true
    },
    post_date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
