import express from 'express';
import VehicleTypeController from '../controllers/vehicleTypeController';

const router = express.Router();
const vehicleTypeController = new VehicleTypeController();

// GET /vehicle-types
router.get('/vehicle-types', vehicleTypeController.getVehicleTypes);

// GET /vehicle-types/:id
router.get('/vehicle-types/:id', vehicleTypeController.getVehicleType);

// POST /vehicle-types
router.post('/vehicle-types', vehicleTypeController.createVehicleType);

// PUT /vehicle-types/:id
router.put('/vehicle-types/:id', vehicleTypeController.updateVehicleType);

// DELETE /vehicle-types/:id
router.delete('/vehicle-types/:id', vehicleTypeController.deleteVehicleType);

export default router;
