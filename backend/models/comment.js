module.exports = (Schema, model) => {
  const Comment = new Schema({
    body: String,
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }
  })

  return model('Comment', Comment)
}
