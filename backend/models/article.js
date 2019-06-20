module.exports = (Schema, model) => model('Article', new Schema({
  link: {
    type: String,
    unique: true
  },
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String,
    unique: true
  }
}))
