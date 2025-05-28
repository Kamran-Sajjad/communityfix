// import Issue from '../models/Issue.js';

// // @desc    Create a new issue
// // @route   POST /api/issues
// // @access  Private (logged-in users)
// export const createIssue = async (req, res) => {
//   const { title, description, category, location } = req.body;

//   try {
//     const issue = await Issue.create({
//       title,
//       description,
//       category,
//       location,
//       createdBy: req.user._id, // From authMiddleware
//     });
//     res.status(201).json(issue);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // @desc    Get all issues
// // @route   GET /api/issues
// // @access  Private
// export const getIssues = async (req, res) => {
//   try {
//     const issues = await Issue.find().populate('createdBy', 'fullName email');
//     res.json(issues);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };












// import Issue from "../models/Issue.js";
// import { cloudinary, storage } from "../config/cloudinary.js";

// export const createIssue = async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       issueCategory,
//       address,
//       contact,
//       issueType,
//       createdBy,
//     } = req.body;
//     // const {
//     //   name,
//     //   address,
//     //   contact,
//     //   issueType,
//     //   issueDetails,
//     //   issueCategory,
//     // } = req.body;

//     const files = req.files;
//     let attachments = [];

//     if (files) {
//       for (const file of files) {
//         const uploaded = await cloudinary.uploader.upload(file.path, {
//           folder: "communityfix/issues",
//         });

//         attachments.push({
//           url: uploaded.secure_url,
//           public_id: uploaded.public_id,
//         });
//       }
//     }

//     const newIssue = new Issue({
//       title,
//       description,
//       issueCategory,
//       address,
//       contact,
//       issueType,
//       createdBy,
//       attachments
//     });
//     // const issue = new Issue({
//     //   name,
//     //   address,
//     //   contact,
//     //   issueType,
//     //   issueDetails,
//     //   issueCategory,
//     //   attachments,
//     // });

//     await newIssue.save();

//     res.status(201).json({ success: true, message: "Issue reported", issue });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };








import Issue from "../models/Issue.js";
import { cloudinary, storage } from "../config/cloudinary.js";

export const createIssue = async (req, res) => {
  try {
    const {
      title,
      name,
      description,
      issueCategory,
      address,
      contact,
      issueType,
    } = req.body;

    const files = req.files;
    let attachments = [];

    if (files && files.length > 0) {
      for (const file of files) {
        const uploaded = await cloudinary.uploader.upload(file.path, {
          folder: "communityfix/issues",
        });

        attachments.push({
          url: uploaded.secure_url,
          public_id: uploaded.public_id,
        });
      }
    }

    const newIssue = new Issue({
      title,
      name,
      description,
      issueCategory,
      address,
      contact,
      issueType,
      attachments,
      createdBy: req.user._id,
    });

    await newIssue.save(); // ✅ Make sure you're using newIssue here

    res.status(201).json({ success: true, message: "Issue reported", issue: newIssue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
