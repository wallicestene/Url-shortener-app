const express = require("express")
const { getUrls, addurls } = require("../controllers/urlController")
const router = express.Router()

router.get("/:shortId", getUrls)
router.post("/urls", addurls)

module.exports = router