const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        category: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'
        }
    }
);

module.exports = mongoose.model('Book', bookSchema);