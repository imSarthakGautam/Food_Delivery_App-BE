const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/productModel");

router.get("/", (req, res) => {
  res.send("hey");
});

router.post("/create", upload.single("image"), async (req, res) => {
try {


  let { name, price, discount, bgColor, panelColor, textColor } = req.body;
  let product = await productModel.create({
    image: req.file.buffer,
    name, price, discount, bgColor, panelColor, textColor
  });
  //res.send(product)
  req.flash('success', 'Product Created Sucessfully');
    res.redirect('/owners/admin')

} catch (err){
    res.send(err.message)
}
});

module.exports = router;
