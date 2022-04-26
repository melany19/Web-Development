const express= require("express");
const router = express.Router();

router.get("/employees", (req, res) => {
    const data = ["employees", "work"]
    res.send(data)
})

module.export = router