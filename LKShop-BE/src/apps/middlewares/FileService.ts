import { cloudinary } from "../functions/cloudinary";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export class FileService {
    async createFile(file: any): Promise<string> {
        try {
            console.log(file)
            const fileName = file.originalname
            const filePath = path.resolve(__dirname, `../../public/${file.fieldname}`);
            return this.uploadToCloudinary(filePath, fileName);
        } catch (e) {
            throw e
        }
    }

    async createLargeFile(file: any): Promise<string[]> {
        try {
            const fileName = file.originalname
            const filePath = path.resolve(__dirname, `../../public/${file.fieldname}`);
            return this.uploadLargeFileToCloudinary(filePath, fileName);
        } catch (e) {
            throw e
        }
    }

    async uploadToCloudinary(filePath: string, fileName: string) {
        try {
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
            };
            const data = await cloudinary.uploader.upload(`${filePath}/${fileName}`, options)
            return data.url;
        }
        catch (e) {
            console.log(e);
        }
    }

    async uploadLargeFileToCloudinary(filePath: string, fileName: string) {
        try {
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                resource_type: "video",
                chunk_size: 6000000
            };
            const data = await cloudinary.uploader.upload(`${filePath}/${fileName}`, options)
            return [
                data.original_filename,
                data.url
            ]
        }
        catch (e) {
            console.log(e);
        }
    }
}