const { Comment, Article } = require('../models')

module.exports = app => {
  app.get('/comments', (req, res) => {
    Comment.find({})
      .populate('article')
      .then(comments => res.json(comments))
      .catch(e => console.log(e))
  })

  // honestly not super sure about this one
  app.post('/comments', (req, res) => {
    Comment.create(req.body)
      .then(({ _id }) => {
        Article.findByIdAndUpdate(req.body.article, { $push: { comments: _id } })
          .then(_ => res.sendStatus(200))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })
}
