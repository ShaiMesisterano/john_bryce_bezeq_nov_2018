var mongoose = require('mongoose');

var ModelsSchema = new mongoose.Schema({
    name: {type: String},
    origin: {type: String},
    year: {
        type: Number
    }
});

ModelsSchema.methods.increaseYears = function(years) {
    this.year = this.year + years;
}

module.exports = mongoose.model('models', ModelsSchema); // 'models': Collection Name