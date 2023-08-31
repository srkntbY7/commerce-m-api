const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema(
  {
    cat_id: String,
    cat_Name: String,
    cat_Title: String,
    cat_Text: String,
    cat_Carousel: [
      {
        image: String,
        title: String,
        link: String,
      },
    ],
    cat_Filters: [
      {
        filterType: String,
        filter_Name: String,
        filters: [String],
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Category = mongoose.model('Category', categoriesSchema);

module.exports = Category;