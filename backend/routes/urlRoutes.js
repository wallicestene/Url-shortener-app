const express = require("express")
const { getUrls, addurls } = require("../controllers/urlController")
const router = express.Router()

router.get("Tiny/:shortId", getUrls)
router.post("/urls", addurls)

module.exports = router