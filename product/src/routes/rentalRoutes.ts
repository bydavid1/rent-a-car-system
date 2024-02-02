import { Router } from 'express';
import RentalController from '../controllers/rentalController';

const router = Router();
const rentalController = new RentalController();

// Define your rental routes here
router.get('/', rentalController.getRentals);

// Get a specific rental
router.get('/:id', rentalController.getRental);

// Create a new rental
router.post('/', rentalController.createRental);

// Update a specific rental
router.put('/:id', rentalController.updateRental);

// Delete a specific rental
router.delete('/:id', rentalController.deleteRental);

export default router;
