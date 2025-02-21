const shop_modles = require("../models/shop_model");

const allItem = async (req, res) => {
  const allItem = await shop_modles.allItem();
  res.render("shop/set", { allItem });
};
const mainDiv = async (req, res) => {
  const mainData = await shop_modles.allItem();
  res.send(mainData);
};
// 데이터 처리
const setData = async (req, res) => {
  let data = {
    userId: req.body.userId,
    name: req.body.name,
    price: req.body.price,
    detail: req.body.detail,
    img: req.file.filename,
  };
  const dataSet = await shop_modles.itemSet(data);
  res.send(200);
  // 추가적으로 DB 저장 등 처리
};
// 아이디로 찾기
const getItembyid = async (req, res) => {
  const oneData = await shop_modles.getItembyid(Number(req.params.id));
  res.render("shop/write", { oneData });
};
//상세페이지 이동
const detailbyid = async (req, res) => {
  const oneData = await shop_modles.getItembyid(Number(req.params.id));
  res.render("shop/detail", { oneData });
};
//수정 데이터
const updateData = async (req, res) => {
  await shop_modles.dataUpdate(req.body.data);
  res.send("200");
};
//데이터 삭제
const delData = async (req, res) => {
  await shop_modles.delData(req.params.id);
  res.send("200");
};

module.exports = {
  allItem,
  setData,
  mainDiv,
  getItembyid,
  updateData,
  delData,
  detailbyid,
};
