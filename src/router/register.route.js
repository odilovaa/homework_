const {Router} = require("express");
const { create, update, remove } = require("../controller/register.controller");
const { login } = require("../middleware/isAuth");

const router = Router()

router.post("/register", create);
router.put("/update/:id", login, update);
router.delete("/register/:id", login, remove);

module.exports = router;