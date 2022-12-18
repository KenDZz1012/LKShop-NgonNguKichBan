import { v2 } from "cloudinary";
import * as dotenv from 'dotenv';
dotenv.config()
console.log(process.env.CLOUD_NAME)

v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});

export { v2 as cloudinary };