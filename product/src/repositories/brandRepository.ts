import Brand from "../models/brand";

class BrandRepository {
  async create(brand: any) : Promise<any>
  {
    const createdBrand = await Brand.create(brand);
    return createdBrand.toJSON();
  }

  async findById(brandId: number) : Promise<any>
  {
    const brand = await Brand.findByPk(brandId);
    return brand ? brand.toJSON() : null;
  }

  async findAll() : Promise<any>
  {
    const brands = await Brand.findAll();
    return brands.map((brand: any) => brand.toJSON());
  }

  async update(brandId: number, brand: any) : Promise<any>
  {
    await Brand.update(brand, { where: { id: brandId } });
    return this.findById(brandId);
  }

  async delete(brandId: number) : Promise<any>
  {
    const brand = await Brand.findByPk(brandId);
    if (brand) {
      await brand.destroy();
      return brand.toJSON();
    } else {
      return null;
    }
  }
}

export default BrandRepository;
