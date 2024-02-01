import { VehicleType } from "../models/vehicleType";

class VehicleTypeRepository {

  async create(vehicleType: any) : Promise<VehicleType>
  {
    const createdVehicleType = await VehicleType.create(vehicleType);
    return createdVehicleType;
  }

  async findById(vehicleTypeId: number) : Promise<VehicleType | null>
  {
    const vehicleType = await VehicleType.findByPk(vehicleTypeId);
    return vehicleType;
  }

  async getAll() : Promise<VehicleType[]>
  {
    const vehicleTypes = await VehicleType.findAll();
    return vehicleTypes
  }

  async update(vehicleTypeId: number, vehicleType: any) : Promise<VehicleType>
  {
    await VehicleType.update(vehicleType, { where: { id: vehicleTypeId } });
    return vehicleType;
  }

  async delete(vehicleTypeId: number) : Promise<boolean>
  {
    const vehicleType = await VehicleType.findByPk(vehicleTypeId);
    if (vehicleType) {
      await vehicleType.destroy();
      return true;
    } else {
      return false;
    }
  }
}

export default VehicleTypeRepository;