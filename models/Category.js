const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        catName: 
        { 
            type: String, 
            required: true 
        }   
    }
);

module.exports = mongoose.model('Category', categorySchema);