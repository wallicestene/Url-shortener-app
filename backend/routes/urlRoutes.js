const express = require("express")
const { getUrls } = require("../controllers/urlController")
const router = express.Router()

router.get("/urls", getUrls)

module.exports = router