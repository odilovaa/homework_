const {Router} = require("express");
const { login } = require("../middleware/isAuth");

const router = Router()

router.post("/candidate", create);
router.put("candidate/update/:id", login, update);
router.delete("/candidate/:id", login, remove);

module.exports = router;