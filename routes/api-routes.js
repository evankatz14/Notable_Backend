const router = require("express").Router();
const Physicians = require("../modules/physicians-module.js")

router.get('/physicians', (req, res) => {
    Physicians.find()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => { 
        res.status(500).json({ message: "Failed to get Physicians", error: err });
      });
  });

router.get('/physicians/:id', (req, res) => { 
    Physicians.findById(req.params.id)
    .then(data => {s
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get physician's appointments", error: err });
    });
});

module.exports = router;