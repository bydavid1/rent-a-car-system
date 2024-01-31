import fs from 'fs';
import path from 'path';

class StorageService {
  private static storageFolder: string = path.join(__dirname, '../storage/uploads');

  static saveFile(file: any, customDir: string | null): string {
    const filename = this.generateFilename(file.originalname);
    let filePath = path.join(this.storageFolder, filename);
    
    if (customDir) {
      const folderPath = path.join(this.storageFolder, customDir);
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      filePath = path.join(folderPath, filename);
    }
    
    fs.writeFileSync(filePath, file.buffer);
    return filename;
  }

  static deleteFile(filename: string): void {
    const filePath = path.join(this.storageFolder, filename);
    fs.unlinkSync(filePath);
  }

  static getFileUrl(filename: string): string {
    const filePath = path.join(this.storageFolder, filename);
    return filePath;
  }

  private static generateFilename(originalFilename: string): string 
  {
    const filename = originalFilename.replace(/ /g, '-');
    return `${Date.now()}-${filename}`;
  }
}

export default StorageService;
