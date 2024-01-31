const BrandService = require('../services/brandService');

class BrandController {
  constructor() {
    this.brandService = new BrandService();
  }
  
  async getBrands(req, res) {
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

  async createBrand(req, res) {
    try {
      // Validate inputs
      const { name, description } = req.body;
      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
      }

      // Create brand
      const brand = await this.brandService.createBrand(name, description);

      // Return response
      return res.status(201).json(brand);
    } catch (error) {
      console.error('Error creating brand:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getBrand(req, res) {
    try {
      // Get brand by ID
      const brandId = req.params.id;
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

  async updateBrand(req, res) {
    try {
      // Validate inputs
      const { name, description } = req.body;
      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
      }

      // Update brand
      const brandId = req.params.id;
      const brand = await this.brandService.updateBrand(brandId, name, description);

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

  async deleteBrand(req, res) {
    try {
      // Delete brand
      const brandId = req.params.id;
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

module.exports = BrandController;
