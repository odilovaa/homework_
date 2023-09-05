const {Router} = require("express");
const { login } = require("../middleware/isAuth");
const { create, update, remove, getAll, getbyid } = require("../controller/vacancy.controller");

const router = Router()

router.post("/vacancy", login, create);
router.put("/vacancy/update/:id", login, update);
router.delete("/vacancy/:id", login, remove);
router.get("/vacancy/:id", login, getAll);
router.get("/vacancy/:id", login, getbyid);


module.exports = router;