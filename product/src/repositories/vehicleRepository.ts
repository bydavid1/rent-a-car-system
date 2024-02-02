import { Vehicle } from '../models/vehicle';

class VehicleRepository {

  async create(vehicle: any) : Promise<Vehicle>
  {
    const createdVehicle = await vehicle.create(vehicle);
    return createdVehicle;
  }

  async findById(vehicleId: number) : Promise<Vehicle | null>
  {
    const vehicle = await Vehicle.findByPk(vehicleId);
    return vehicle;
  }

  async getAll() : Promise<Vehicle[]>
  {
    const vehicles = await Vehicle.findAll();
    return vehicles;
  }

  async update(vehicleId: number, vehicle: Vehicle) : Promise<Vehicle>
  {
    await vehicle.update(vehicle, { where: { id: vehicleId } });
    return vehicle;
  }

  async delete(vehicleId: number) : Promise<boolean>
  {
    const vehicle = await Vehicle.findByPk(vehicleId);
    
    if (vehicle) {
      await vehicle.destroy();
      return true;
    } else {
      return false;
    }
  }
}

export default VehicleRepository;