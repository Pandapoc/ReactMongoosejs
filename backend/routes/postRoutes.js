const { Post } = require('../models')

module.exports = app => {
  app.get('/posts', (req, res) => {
    Post.find({})
      .populate('comments')
      .then(posts => res.json(posts))
      .catch(e => console.log(e))
  })
}
