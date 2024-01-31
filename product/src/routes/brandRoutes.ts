import express, { Router } from 'express';
import isAuthenticated from '../utils/isAuthenticated';
import BrandController from '../controllers/brandController';

const router: Router = express.Router();
const brandController: BrandController = new BrandController();

// GET all brands
router.get('/', isAuthenticated, brandController.getBrands);

// GET a specific brand by ID
router.get('/:id', isAuthenticated, brandController.getBrand);

// CREATE a new brand
router.post('/', isAuthenticated, brandController.createBrand);

// UPDATE an existing brand
router.put('/:id', isAuthenticated, brandController.updateBrand);

// DELETE a brand
router.delete('/:id', isAuthenticated, brandController.deleteBrand);

module.exports = router;
