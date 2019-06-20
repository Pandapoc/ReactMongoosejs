module.exports = (Schema, model) => {
  const Post = new Schema({
    headline: String,
    summary: String,
    url: String,
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }]
  })

  return model('Post', Post)
}
