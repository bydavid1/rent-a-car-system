import { Model } from '../models/Model';

class ModelRepository {

  async create(data: Model) : Promise<Model> {
    const model = await Model.create(data);
    return model;
  }

  async findById(modelId: number) : Promise<Model | null> {
    const model = await Model.findByPk(modelId);
    return model;
  }

  async getAll() : Promise<Model[]> {
    const models = await Model.findAll();
    return models;
  }

  async update(modelId: number, data: Model) : Promise<Model | null> {
    await Model.update(data, { where: { id: modelId } });
    return this.findById(modelId);
  }

  async delete(modelId: number) : Promise<boolean> {
    const model = await Model.findByPk(modelId);
    
    if (model) {
      await model.destroy();
      return true;
    } else {
      return false;
    }
  }
}

export default ModelRepository;
