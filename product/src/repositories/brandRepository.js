const Brand = require("../models/brand");

class BrandRepository {
  async create(brand) {
    const createdBrand = await Brand.create(brand);
    return createdBrand.toJSON();
  }

  async findById(brandId) {
    const brand = await Brand.findByPk(brandId);
    return brand ? brand.toJSON() : null;
  }

  async findAll() {
    const brands = await Brand.findAll();
    return brands.map((brand) => brand.toJSON());
  }
}

module.exports = BrandRepository;
