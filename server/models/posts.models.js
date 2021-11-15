const mongoose = require('mongoose');

const Reply = new mongoose.Schema({
  author_id: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  date: String,
});
const Survey = new mongoose.Schema({
  component: { type: String, required: true },
  type: { type: String, required: true },
  label: { type: String, required: true },
  options: [String],
});

const PostSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  author_id: { type: String, required: true },
  author: { type: String, required: true },
  votes: { type: Number, required: true },
  replies: [Reply],
  content: { type: String, required: true },
  survey: [Survey],
  date: String,
  respondees: [String],
});

PostSchema.methods.getAll = function () {
  return this.find();
};
PostSchema.methods.getPost = function (id) {
  return this.findById(id);
};
PostSchema.methods.upvotePost = function (id) {
  return this.findByIdAndUpdate(id, { $inc: { votes: 1 } });
};
PostSchema.methods.addPost = function (post) {
  return this.create(post);
};

module.exports = mongoose.model('Post', PostSchema);
