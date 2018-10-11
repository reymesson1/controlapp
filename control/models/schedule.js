var mongoose = require('mongoose');

module.exports = mongoose.model('schedule',{    
  name: String,
  start: Number,
  error: Boolean,
})