const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId: String,
    productGroupId: String,
    gender: String,
    designer: String,
    productName: String,
    color: String,
    prices:  [{
      currency: String,
      price: Number,
    }],
    images: [String],
    sizes: [
      {
        size: String,
        Stock: Number,
      }
    ],
    category: String,
    descriptions: [
      {
        desc_title: String,
        desc_text: String,
        desc_open: Boolean,
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;