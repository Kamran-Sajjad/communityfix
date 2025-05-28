// cloudinary.js
// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configure your credentials
cloudinary.config({
  cloud_name: 'dnymtb171',        // Replace with your Cloudinary cloud name
  api_key: '563241317656581',              // Replace with your API key
  api_secret: 'MsV05AvAIEm510CgdrLN0PNfAVk'         // Replace with your API secret
});


const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'communityfix/issues',       // Folder name in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png'],
    public_id: (req, file) => file.originalname  // Optional: use original filename
  }
});

export {
  cloudinary,
  storage
};
