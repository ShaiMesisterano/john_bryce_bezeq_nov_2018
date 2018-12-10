var mongoose = require('mongoose');

var ModelsSchema = new mongoose.Schema({
    name: {type: String},
    origin: {type: String},
    year: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return false;
            },
            message: function(props) {
                return `${props.value} is not a number`;
            }
        }
    }
});

ModelsSchema.methods.increaseYears = function(years) {
    this.year = this.year + years;
}

module.exports = mongoose.model('models', ModelsSchema); // 'models': Collection Name