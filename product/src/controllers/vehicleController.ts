import { Request, Response } from 'express';
import VehicleRepository from '../repositories/vehicleRepository';


export class VehicleController {

  private vehicleRepository: VehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }


  async create(req: Request, res: Response) {
    try {
      // Perform validations on the request body
      // ...

      // Create a new vehicle
      const vehicle = await this.vehicleRepository.create(req.body);

      res.status(201).json(vehicle);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async update(req: Request, res: Response) {
    try {
      // Perform validations on the request body
      // ...

      const vehicleId = parseInt(req.params.id);

      // Update the vehicle
      const vehicle = await this.vehicleRepository.update(vehicleId, req.body);

      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }

      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const vehicleId = parseInt(req.params.id);
      // Delete the vehicle
      const deletedVehicle = await this.vehicleRepository.delete(vehicleId);

      if (!deletedVehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }

      res.json(deletedVehicle);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const vehicleId = parseInt(req.params.id);

      // Get the vehicle by ID
      const vehicle = await this.vehicleRepository.findById(vehicleId);

      if (!vehicle) {
        return res.status(404).json({ error: 'Vehicle not found' });
      }

      res.json(vehicle);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      // Get all vehicles
      const vehicles = await this.vehicleRepository.getAll();

      res.json(vehicles);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
