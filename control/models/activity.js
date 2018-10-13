var mongoose = require('mongoose');

module.exports = mongoose.model('activity',{    
  name: String,
  lastRun: Date,
  error: String,
})