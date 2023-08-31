const Product = require('../../models/productModel/productModel');

exports.getCategoryProducts = async(req, res, next) => {
  const catId = req.params.catid;

  let products = await Product.find({ username: {$cat_id : '^' + catId}});
  
  if(!products) {
    
  }

  res.status(200).json({
    status: 'success',
    data: {
      products,
    },
  });
};