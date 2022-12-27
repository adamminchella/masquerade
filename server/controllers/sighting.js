const Sighting = require("../models/sighting");

async function index(req, res) {
  try {
    const sightings = await Sighting.all;
    res.status(200).json(sightings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    const newSighting = await Sighting.create(data);
    res.status(201).json(newSighting);
  } catch (err) {}
}

module.exports = { index, create };
