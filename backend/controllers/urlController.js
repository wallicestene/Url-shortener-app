const mongoose = require("mongoose");
const Urls = require("../models/urlModel");
const shortid = require("shortid");
// geturls
const getUrls = (req, res) => {
  const { shortId } = req.params;
  Urls.findOne({ shortId })
    .then((url) => {
      if (!url) {
        return res.status(404).json({ message: "Url not found" });
      }
      else {
        res.redirect(url.longUrl)
      }
    })
    // catch error
    .catch((err) => {
      console.log("error", err);
    });
};

// add urls
const addurls = (req, res) => {
  const { longUrl } = req.body;
  const shortId = shortid.generate();
  Urls.create({ longUrl, shortId })
    .then((result) => {
      res.status(200).json({
        shortUrl: `${req.hostname}/${shortId}`,
      });
    })
    .catch(() => {
      res.status(404).json({ error: "Error while adding url" });
    });
};

module.exports = {
  getUrls,
  addurls,
};
