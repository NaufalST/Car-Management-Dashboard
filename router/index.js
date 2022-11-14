import express from "express";
import {
    getCars, getCarsbySize, createCars, updateCars, deleteCars
}from"../controllers/CarsController.js";

const router = express.Router();
const prefix = "/v1/api/";

router.get(prefix + 'cars', getCars);
router.get(prefix + 'cars/:size', getCarsbySize);
router.post(prefix + 'cars', createCars);
router.put(prefix + 'cars/:id', updateCars);
router.delete(prefix + 'cars/:id', deleteCars);

export default router;