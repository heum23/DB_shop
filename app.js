const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const shop_router = require("./routers/shop_router");
const cart_router = require("./routers/cart_router");
//이미지 저장
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    //원본 파일명에서 확장자 추출
    const ext = path.extname(file.originalname);
    //파일명에 타임스탭프와 확장자를 포함시켜서 저장
    cb(null, Date.now() + ext); //timestamp + 확장자
  },
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));
app.set("view engine", "ejs");
app.set("views", "./views");
//라우팅
app.use("/shop", shop_router);
app.use("/cart", cart_router);

//메인페이지
app.get("/", (req, res) => {
  res.cookie("key", "value");
  res.render("main");
});
//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
