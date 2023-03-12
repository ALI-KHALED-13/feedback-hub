const express = require("express");
const { catchErrors } = require("../utils/handleErrors");

const {getAllStatuses, createNewStatus, modifyStatus} = require("./controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();


router.get("/", catchErrors(getAllStatuses));


router.route("/").post(auth, catchErrors(createNewStatus));

router.route("/:id").put(auth, catchErrors(modifyStatus));


module.exports = router;