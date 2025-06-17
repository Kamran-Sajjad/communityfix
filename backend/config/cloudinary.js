import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();
// Configure your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "communityfix/issues", // Folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
    public_id: (req, file) => file.originalname, // Optional: use original filename
  },
});

export { cloudinary, storage };
