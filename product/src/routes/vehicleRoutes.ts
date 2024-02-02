import express from 'express';
import VehicleController from '../controllers/vehicleController';

const router = express.Router();
const vehicleController = new VehicleController();

// Create a new vehicle
router.post('/', vehicleController.createVehicle);

// Get a specific vehicle
router.get('/:id', vehicleController.getVehicleById);

// Update a vehicle
router.put('/:id', vehicleController.updateVehicle);

// Delete a vehicle
router.delete('/:id', vehicleController.deleteVehicle);

// Get all vehicles
router.get('/', vehicleController.getAllVehicles);


export default router;
