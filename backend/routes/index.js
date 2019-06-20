module.exports = app => {
  require('./articleRoutes.js')(app)
  require('./postRoutes.js')(app)
  require('./commentRoutes.js')(app)
}
