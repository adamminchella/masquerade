const { Router } = require("express");
const sightingRouter = Router();

const sightingController = require("../controllers/sighting");

sightingRouter.get("/", sightingController.index);
sightingRouter.post("/", sightingController.create);

module.exports = sightingRouter;
