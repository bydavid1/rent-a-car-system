import express from 'express';
import ModelController from '../controllers/modelController';

const router = express.Router();
const modelController = new ModelController();

// Create a new model
router.post('/', modelController.createModel);

// Get a specific model
router.get('/:id', modelController.getModel);

// Update a specific model
router.put('/:id', modelController.updateModel);

// Delete a specific model
router.delete('/:id', modelController.deleteModel);

export default router;
