const express = require("express");
const { catchErrors } = require("../utils/handleErrors");

const {getAllStatuses, createNewStatus, modifyStatus} = require("./controllers");

const router = express.Router();


router.get("/", catchErrors(getAllStatuses));


router.post("/", catchErrors(createNewStatus));

router.put("/:id", catchErrors(modifyStatus));


module.exports = router;