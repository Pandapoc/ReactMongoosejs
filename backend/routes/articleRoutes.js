const { Article } = require('../models')

module.exports = app => {
  app.get('/articles', (req, res) => {
    Article.find({}, (e, articles) => {
      if (e) throw e
      res.json(articles)
    })
  })

  app.get('/articles/:id', (req, res) => {
    Article.findById(req.params.id, (e, articles) => {
      if (e) throw e
      res.json(articles)
    })
  })

  app.post('/articles', (req, res) => {
    Article.create(req.body, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  app.put('/articles/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })

  app.delete('/articles/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id, (e) => {
      if (e) throw e
      res.sendStatus(200)
    })
  })
}
