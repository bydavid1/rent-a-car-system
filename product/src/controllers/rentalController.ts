import { Request, Response } from 'express';
import { RentalRepository } from '../repositories/rentalRepository';

export class RentalController {
  private rentalRepository: RentalRepository;

  constructor() {
    this.rentalRepository = new RentalRepository();
  }

  public getRentals(req: Request, res: Response): void {
    try {
      const rentals = this.rentalRepository.findAll();
      res.json(rentals);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public createRental(req: Request, res: Response): void {
    try {
      const rentalData = req.body;
      const newRental = this.rentalRepository.create(rentalData);
      res.status(201).json(newRental);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public getRental(req: Request, res: Response): void {
    try {
      const rentalId = parseInt(req.params.id);
      const rental = this.rentalRepository.findById(rentalId);
      res.json(rental);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public updateRental(req: Request, res: Response): void {
    try {
      const rentalId = parseInt(req.params.id);
      const rentalData = req.body;
      const updatedRental = this.rentalRepository.update(rentalId, rentalData);
      res.json(updatedRental);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  public deleteRental(req: Request, res: Response): void {
    try {
      const rentalId = parseInt(req.params.id);
      this.rentalRepository.delete(rentalId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
