import { Request, Response } from 'express';
import ModelRepository from "../repositories/modelRepository";

class ModelController {

  private modelRepository: ModelRepository;

  constructor() {
    this.modelRepository = new ModelRepository();
  }

  async getModels(req: Request, res: Response) {
    try {
      // Implement read logic here
      const result = await this.modelRepository.getAll();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createModel(req: Request, res: Response) {
    try {
      // Implement create logic here
      const data = req.body;
      // Add validation logic here
      // ...
      const result = await this.modelRepository.create(data);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getModel(req: Request, res: Response) {
    try {
      // Implement read logic here
      const id = parseInt(req.params.id);
      // Add validation logic here
      // ...
      const result = await this.modelRepository.findById(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateModel(req: Request, res: Response) {
    try {
      // Implement update logic here
      const id = parseInt(req.params.id);
      const data = req.body;
      // Add validation logic here
      // ...
      const result = await this.modelRepository.update(id, data);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteModel(req: Request, res: Response) {
    try {
      // Implement delete logic here
      const id = parseInt(req.params.id);
      // Add validation logic here
      // ...
      const result = await this.modelRepository.delete(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ModelController;
