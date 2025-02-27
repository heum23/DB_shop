const cart_controller = require("../controllers/cart_controller");
const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

router.get("/all", cart_controller.allData);
router.post("/set/:id", cart_controller.setData);
router.get("/allId", cart_controller.allId);
router.post("/cartData", cart_controller.cartData);
router.delete("/delete/:id", cart_controller.delData);
router.delete("/delAll", cart_controller.delAll);
router.get("/pay", cart_controller.cartpay);
module.exports = router;
