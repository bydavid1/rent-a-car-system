const BrandRepository = require("../repositories/brandRepository");

class BrandService {
  constructor() {
    this.brandRepository = new BrandRepository();
  }

  async createBrand(brandData) {
    return this.brandRepository.create(brandData);
  }

  async getBrandById(brandId) {
    return this.brandRepository.findById(brandId);
  }

  async getAllBrands() {
    return this.brandRepository.findAll();
  }

  async updateBrand(brandId, brandData) {
    return this.brandRepository.update(brandId, brandData);
  }

  async deleteBrand(brandId) {
    return this.brandRepository.delete(brandId);
  }
}

module.exports = BrandService;
