import { Rental } from '../models/rentals'; // Assuming you have a 'Rental' model defined

export class RentalRepository {
  async create(rentalData: any): Promise<any> {
    const rental = await Rental.create(rentalData);
    return rental;
  }

  async findById(id: number): Promise<Rental | null> {
    const rental = await Rental.findByPk(id);
    return rental;
  }

  async findAll(): Promise<Rental[]> {
    const rentals = await Rental.findAll();
    return rentals;
  }

  async update(id: number, rentalData: any): Promise<Rental> {
    const rental = await Rental.findByPk(id);
    if (rental) {
      await rental.update(rentalData);
      return rental;
    } else {
      throw new Error('Rental not found');
    }
  }

  async delete(id: number): Promise<boolean> {
    const rental = await Rental.findByPk(id);
    if (rental) {
      await rental.destroy();
      return true;
    } else {
      return false;
    }
  }
}
