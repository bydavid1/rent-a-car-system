import { Request, Response } from 'express';
import BrandService from '../services/brandService';

class BrandController {
  private brandService: BrandService;

  constructor() {
    this.brandService = new BrandService();
  }

  async getBrands(req: Request, res: Response): Promise<Response> {
    try {
      // Get all brands
      const brands = await this.brandService.getAllBrands();

      // Return response
      return res.json(brands);
    } catch (error) {
      console.error('Error getting brands:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createBrand(req: Request, res: Response): Promise<Response> {
    try {
      // Validate inputs
      const { name } = req.body;
      const file = req.body.image; //TODO: Validate file

      if (!file) {
        return res.status(400).json({ error: 'Image is required' });
      }

      if (!name) {
        return res.status(400).json({ error: 'Name and description are required' });
      }
 
      const filename = this.brandService.saveBrandImage(file);

      // Create brand
      const brandData = { name, image: filename };
      const brand = await this.brandService.createBrand(brandData);      

      // Return response
      return res.status(201).json(brand);
    } catch (error) {
      console.error('Error creating brand:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getBrand(req: Request, res: Response): Promise<Response> {
    try {
      // Get brand by ID
      const brandId = parseInt(req.params.id);
      const brand = await this.brandService.getBrandById(brandId);

      // Return response
      if (brand) {
        return res.json(brand);
      } else {
        return res.status(404).json({ error: 'Brand not found' });
      }
    } catch (error) {
      console.error('Error getting brand:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateBrand(req: Request, res: Response): Promise<Response> {
    try {
      // Validate inputs
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ error: 'Name and description are required' });
      }

      // Update brand
      const brandId = parseInt(req.params.id);
      const brandData = { name };
      const brand = await this.brandService.updateBrand(brandId, brandData);

      // Return response
      if (brand) {
        return res.json(brand);
      } else {
        return res.status(404).json({ error: 'Brand not found' });
      }
    } catch (error) {
      console.error('Error updating brand:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteBrand(req: Request, res: Response): Promise<Response> {
    try {
      // Delete brand
      const brandId = parseInt(req.params.id);
      const brand = await this.brandService.deleteBrand(brandId);

      // Return response
      if (brand) {
        return res.json({ message: 'Brand deleted successfully' });
      } else {
        return res.status(404).json({ error: 'Brand not found' });
      }
    } catch (error) {
      console.error('Error deleting brand:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default BrandController;
