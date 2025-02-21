const cart_model = require("../models/cart_model");

const allData = async (req, res) => {
  const all = await cart_model.allId();
  res.render("cart/cart", { all });
};
const allId = async (req, res) => {
  const all = await cart_model.allId();
  res.json({ all });
};
const setData = async (req, res) => {
  const dataSet = await cart_model.itemSet(req.params.id);
  res.send(200);
  // 추가적으로 DB 저장 등 처리
};
const cartData = async (req, res) => {
  const cart = await cart_model.cartData(req.body);
  res.send({ cart });
};
//데이터 삭제
const delData = async (req, res) => {
  await cart_model.delData(req.params.id);
  res.send("200");
};
module.exports = { allData, setData, allId, cartData, delData };
