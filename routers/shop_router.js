const shop_controller = require("../controllers/shop_controller");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 파일이 저장될 디렉토리 설정
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // 파일 확장자 추출
    cb(null, Date.now() + ext); // 타임스탬프 + 확장자
  },
});

const upload = multer({ storage: storage });

router.get("/set", shop_controller.allItem);
router.get("/main", shop_controller.mainDiv);
router.post("/upload", upload.single("img"), shop_controller.setData);

router.get("/write/:id", shop_controller.getItembyid);
router.post("/update/:id", shop_controller.updateData);
router.delete("/delete/:id", shop_controller.delData);
router.get("/detail/:id", shop_controller.detailbyid);
module.exports = router;
