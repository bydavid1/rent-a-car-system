import { Request, Response } from 'express';
import VehicleTypeRepository from '../repositories/vehicleTypeRepository';

class VehicleTypeController {
  private vehicleTypeRepository: VehicleTypeRepository;

  constructor() {
    this.vehicleTypeRepository = new VehicleTypeRepository();
  }

  public getVehicleTypes(req: Request, res: Response): void {
    try {
      const vehicleTypes = this.vehicleTypeRepository.getAll();
      res.json(vehicleTypes);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public createVehicleType(req: Request, res: Response): void {
    try {
      const vehicleTypeData = req.body;
      const newVehicleType = this.vehicleTypeRepository.create(vehicleTypeData);
      res.status(201).json(newVehicleType);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public getVehicleType(req: Request, res: Response): void {
    try {
      const vehicleTypeId = parseInt(req.params.id);
      const vehicleType = this.vehicleTypeRepository.findById(vehicleTypeId);
      res.json(vehicleType);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public updateVehicleType(req: Request, res: Response): void {
    try {
      const vehicleTypeId = parseInt(req.params.id);
      const vehicleTypeData = req.body;
      const updatedVehicleType = this.vehicleTypeRepository.update(vehicleTypeId, vehicleTypeData);
      res.json(updatedVehicleType);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public deleteVehicleType(req: Request, res: Response): void {
    try {
      const vehicleTypeId = parseInt(req.params.id);
      this.vehicleTypeRepository.delete(vehicleTypeId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default VehicleTypeController;
