import fs from 'fs';
import path from 'path';

class StorageService {
  private storageFolder: string = path.join(__dirname, '../storage/uploads');

  saveFile(file: any): string 
  {
    const filename = this.generateFilename(file.originalname);
    const filePath = path.join(this.storageFolder, filename);
    fs.writeFileSync(filePath, file.buffer);
    return filename;
  }

  deleteFile(filename: string): void {
    const filePath = path.join(this.storageFolder, filename);
    fs.unlinkSync(filePath);
  }

  getFileUrl(filename: string): string {
    const filePath = path.join(this.storageFolder, filename);
    return filePath;
  }

  generateFilename(originalFilename: string): string 
  {
    const filename = originalFilename.replace(/ /g, '-');
    return `${Date.now()}-${filename}`;
  }
}

export default StorageService;
