const { Schema, model } = require('mongoose')

const db = {
  Article: require('./article.js')(Schema, model),
  Comment: require('./comment.js')(Schema, model),
}

module.exports = db
