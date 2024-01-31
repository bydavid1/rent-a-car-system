import BrandRepository from "../repositories/brandRepository.ts";
import StorageService from "./storageService.ts";

class BrandService {
  private brandRepository: BrandRepository;

  constructor() {
    this.brandRepository = new BrandRepository();
  }

  async createBrand(brandData: any): Promise<any> {
    return this.brandRepository.create(brandData);
  }

  async saveBrandImage(image: any): Promise<any> {
    return StorageService.saveFile(image, `brands/`);
  }

  async getBrandById(brandId: number): Promise<any> {
    return this.brandRepository.findById(brandId);
  }

  async getAllBrands(): Promise<any> {
    return this.brandRepository.findAll();
  }

  async updateBrand(brandId: number, brandData: any): Promise<any> {
    return this.brandRepository.update(brandId, brandData);
  }

  async deleteBrand(brandId: number): Promise<any> {
    return this.brandRepository.delete(brandId);
  }
}

export default BrandService;
