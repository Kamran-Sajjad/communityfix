// import Notification from "../models/Notification.js";

// // Get user notifications
// export const getUserNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ 
//       recipient: req.user._id 
//     })
//       .sort({ createdAt: -1 })
//       .limit(20)
//       .populate("sender", "fullName profileImage");

//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Mark as read
// export const markAsRead = async (req, res) => {
//   try {
//     await Notification.findByIdAndUpdate(
//       req.params.id,
//       { isRead: true }
//     );
//     res.status(200).json({ success: true });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };













// import Notification from "../models/Notification.js";




// // // Get user notifications
// export const getUserNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ 
//       recipient: req.user._id 
//     })
//       .sort({ createdAt: -1 })
//       .limit(20)
//       .populate("sender", "fullName profileImage");

//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// export const markAsRead = async (req, res) => {
//   try {
//     const notification = await Notification.findByIdAndUpdate(
//       req.params.id,
//       { isRead: true },
//       { new: true } // Ensure the updated document is returned
//     );
    
//     if (!notification) {
//       return res.status(404).json({ message: "Notification not found" });
//     }

//     res.status(200).json(notification); // Return the updated notification
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



// import Notification from "../models/Notification.js";
// import User from "../models/User.js";
// import Issue from "../models/Issue.js";

// // Send notification when issue is reported
// export const notifyIssueReported = async (issue, reporter) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const message = `New ${issue.issueType} issue reported: ${issue.title}`;

//   // Notify Admin
//   await Notification.create({
//     recipient: admin._id,
//     sender: reporter._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_reported"
//   });

//   // If societal issue, notify service team
//   if (issue.issueType === "societal") {
//     const serviceTeam = await User.find({ accountType: "serviceTeam" });
//     await Notification.insertMany(
//       serviceTeam.map((member) => ({
//         recipient: member._id,
//         sender: reporter._id,
//         message,
//         issue: issue._id,
//         notificationType: "issue_reported"
//       }))
//     );
//   }
// };

// // Notify when feedback is submitted
// export const notifyFeedbackSubmitted = async (feedback, sender) => {
//   const admins = await User.find({ accountType: "admin" });
//   const serviceTeam = await User.find({ accountType: "serviceTeam" });

//   const message = `New feedback submitted: ${feedback.message}`;

//   // Notify Admins and Service Team
//   const allRecipients = [...admins, ...serviceTeam];
//   await Notification.insertMany(
//     allRecipients.map((recipient) => ({
//       recipient: recipient._id,
//       sender: sender._id,
//       message,
//       notificationType: "feedback_submitted"
//     }))
//   );
// };

// // Notify when profile is updated (only for the user)
// export const notifyProfileUpdated = async (user) => {
//   const message = "Your profile has been updated";

//   // Send notification to the user themselves
//   await Notification.create({
//     recipient: user._id,
//     sender: user._id,
//     message,
//     notificationType: "profile_updated"
//   });
// };

// // Notify when a user is suspended
// export const notifyUserSuspended = async (user) => {
//   const message = "Your account has been suspended";

//   // Send notification to the suspended user
//   await Notification.create({
//     recipient: user._id,
//     sender: user._id,
//     message,
//     notificationType: "user_suspended"
//   });
// };

// // Notify when service team accepts an issue
// export const notifyServiceTeamAcceptedIssue = async (issue, serviceTeamMember) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const resident = await User.findById(issue.createdBy);

//   const message = `Your issue "${issue.title}" has been accepted by the service team`;

//   // Notify Admin
//   await Notification.create({
//     recipient: admin._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_accepted"
//   });

//   // Notify Resident
//   await Notification.create({
//     recipient: resident._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_accepted"
//   });
// };

// // Notify when service team updates issue progress
// export const notifyProgressUpdated = async (issue, serviceTeamMember) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const resident = await User.findById(issue.createdBy);

//   const message = `The progress on your issue "${issue.title}" has been updated`;

//   // Notify Admin
//   await Notification.create({
//     recipient: admin._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "progress_updated"
//   });

//   // Notify Resident
//   await Notification.create({
//     recipient: resident._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "progress_updated"
//   });
// };













// import Notification from "../models/Notification.js";
// import User from "../models/User.js";
// import Issue from "../models/Issue.js";
// import { io } from "../server.js";
// // import feedbackRoutes from './routes/feedback.js';


// // -------------------- GET & READ --------------------

// export const getUserNotifications = async (req, res) => {
//   try {
//     const notifications = await Notification.find({ recipient: req.user._id })
//       .sort({ createdAt: -1 })
//       .limit(20)
//       .populate("sender", "fullName profileImage");

//     res.status(200).json(notifications);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const markAsRead = async (req, res) => {
//   try {
//     const notification = await Notification.findByIdAndUpdate(
//       req.params.id,
//       { isRead: true },
//       { new: true }
//     );

//     if (!notification) {
//       return res.status(404).json({ message: "Notification not found" });
//     }

//     res.status(200).json(notification);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // -------------------- UTILITY FUNCTIONS --------------------

// const emitNotification = (userId, data) => {
//   io.to(userId.toString()).emit("new-notification", data);
// };

// // -------------------- USE CASE NOTIFICATIONS --------------------

// export const notifyIssueReported = async (issue, reporter) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const message = `New ${issue.issueType} issue reported: ${issue.title}`;

//   const adminNotification = await Notification.create({
//     recipient: admin._id,
//     sender: reporter._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_reported"
//   });

//   emitNotification(admin._id, {
//     message,
//     notificationType: "issue_reported"
//   });

//   if (issue.issueType === "societal") {
//     const serviceTeam = await User.find({ accountType: "serviceTeam" });

//     const notifications = await Notification.insertMany(
//       serviceTeam.map((member) => ({
//         recipient: member._id,
//         sender: reporter._id,
//         message,
//         issue: issue._id,
//         notificationType: "issue_reported"
//       }))
//     );

//     serviceTeam.forEach(member =>
//       emitNotification(member._id, {
//         message,
//         notificationType: "issue_reported"
//       })
//     );
//   }
// };

// export const notifyFeedbackSubmitted = async (feedback, sender) => {
//   const admins = await User.find({ accountType: "admin" });
//   const serviceTeam = await User.find({ accountType: "serviceTeam" });
//   const message = `New feedback submitted: ${feedback.message}`;

//   const allRecipients = [...admins, ...serviceTeam];

//   const notifications = await Notification.insertMany(
//     allRecipients.map((recipient) => ({
//       recipient: recipient._id,
//       sender: sender._id,
//       message,
//       notificationType: "feedback_submitted"
//     }))
//   );

//   allRecipients.forEach(recipient =>
//     emitNotification(recipient._id, {
//       message,
//       notificationType: "feedback_submitted"
//     })
//   );
// };

// export const notifyProfileUpdated = async (user) => {
//   const message = "Your profile has been updated";

//   await Notification.create({
//     recipient: user._id,
//     sender: user._id,
//     message,
//     notificationType: "profile_updated"
//   });

//   emitNotification(user._id, {
//     message,
//     notificationType: "profile_updated"
//   });
// };

// export const notifyUserSuspended = async (user) => {
//   const message = "Your account has been suspended";

//   await Notification.create({
//     recipient: user._id,
//     sender: user._id,
//     message,
//     notificationType: "user_suspended"
//   });

//   emitNotification(user._id, {
//     message,
//     notificationType: "user_suspended"
//   });
// };

// export const notifyServiceTeamAcceptedIssue = async (issue, serviceTeamMember) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const resident = await User.findById(issue.createdBy);

//   const message = `Your issue "${issue.title}" has been accepted by the service team`;

//   await Notification.create({
//     recipient: admin._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_accepted"
//   });
//   emitNotification(admin._id, {
//     message,
//     notificationType: "issue_accepted"
//   });

//   await Notification.create({
//     recipient: resident._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "issue_accepted"
//   });
//   emitNotification(resident._id, {
//     message,
//     notificationType: "issue_accepted"
//   });
// };

// export const notifyProgressUpdated = async (issue, serviceTeamMember) => {
//   const admin = await User.findOne({ accountType: "admin" });
//   const resident = await User.findById(issue.createdBy);
//   const message = `The progress on your issue "${issue.title}" has been updated`;

//   await Notification.create({
//     recipient: admin._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "progress_updated"
//   });
//   emitNotification(admin._id, {
//     message,
//     notificationType: "progress_updated"
//   });

//   await Notification.create({
//     recipient: resident._id,
//     sender: serviceTeamMember._id,
//     message,
//     issue: issue._id,
//     notificationType: "progress_updated"
//   });
//   emitNotification(resident._id, {
//     message,
//     notificationType: "progress_updated"
//   });
// };

// // -------------------- END --------------------











// notificationController.js

import Notification from "../models/Notification.js";
import User from "../models/User.js";
import { io } from "../server.js";

// -------------------- GET & READ --------------------

export const getUserNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id })
      .sort({ createdAt: -1 })
      .limit(20)
      .populate("sender", "fullName profileImage");

    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// -------------------- UTILITY FUNCTIONS --------------------

const emitNotification = (userId, data) => {
  io.to(userId.toString()).emit("new-notification", data);
};

// -------------------- NOTIFY CASES --------------------

// Notify when an issue is reported
export const notifyIssueReported = async (issue, reporter) => {
  const admin = await User.findOne({ accountType: "admin" });
  const message = `New ${issue.issueType} issue reported: ${issue.title}`;

  const adminNotification = await Notification.create({
    recipient: admin._id,
    sender: reporter._id,
    message,
    issue: issue._id,
    notificationType: "issue_reported"
  });

  emitNotification(admin._id, {
    message,
    notificationType: "issue_reported"
  });

  if (issue.issueType === "societal") {
    const serviceTeam = await User.find({ accountType: "serviceTeam" });

    const notifications = await Notification.insertMany(
      serviceTeam.map((member) => ({
        recipient: member._id,
        sender: reporter._id,
        message,
        issue: issue._id,
        notificationType: "issue_reported"
      }))
    );

    serviceTeam.forEach(member =>
      emitNotification(member._id, {
        message,
        notificationType: "issue_reported"
      })
    );
  }
};

// Notify when feedback is submitted
export const notifyFeedbackSubmitted = async (feedback, sender) => {
  const admins = await User.find({ accountType: "admin" });
  const serviceTeam = await User.find({ accountType: "serviceTeam" });
  const message = `New feedback submitted: ${feedback.message}`;

  const allRecipients = [...admins, ...serviceTeam];

  const notifications = await Notification.insertMany(
    allRecipients.map((recipient) => ({
      recipient: recipient._id,
      sender: sender._id,
      message,
      notificationType: "feedback_submitted"
    }))
  );

  allRecipients.forEach(recipient =>
    emitNotification(recipient._id, {
      message,
      notificationType: "feedback_submitted"
    })
  );
};

// Notify when the profile is updated
export const notifyProfileUpdated = async (user) => {
  const message = "Your profile has been updated";

  await Notification.create({
    recipient: user._id,
    sender: user._id,
    message,
    notificationType: "profile_updated"
  });

  emitNotification(user._id, {
    message,
    notificationType: "profile_updated"
  });
};

// Notify when the user is suspended
export const notifyUserSuspended = async (user) => {
  const message = "Your account has been suspended";

  await Notification.create({
    recipient: user._id,
    sender: user._id,
    message,
    notificationType: "user_suspended"
  });

  emitNotification(user._id, {
    message,
    notificationType: "user_suspended"
  });
};

// Notify when the user is activated
export const notifyUserActivated = async (user) => {
  const message = "Your account has been activated";

  await Notification.create({
    recipient: user._id,
    sender: user._id,
    message,
    notificationType: "user_reactivated"
    // notificationType: "user_activated"
  });

  emitNotification(user._id, {
    message,
    notificationType: "user_reactivated"
    // notificationType: "user_activated"
  });
};

// Notify when the service team accepts an issue
export const notifyServiceTeamAcceptedIssue = async (issue, serviceTeamMember) => {
  const admin = await User.findOne({ accountType: "admin" });
  const resident = await User.findById(issue.createdBy);

  const message = `Your issue "${issue.title}" has been accepted by the service team`;

  await Notification.create({
    recipient: admin._id,
    sender: serviceTeamMember._id,
    message,
    issue: issue._id,
    notificationType: "issue_accepted"
  });
  emitNotification(admin._id, {
    message,
    notificationType: "issue_accepted"
  });

  await Notification.create({
    recipient: resident._id,
    sender: serviceTeamMember._id,
    message,
    issue: issue._id,
    notificationType: "issue_accepted"
  });
  emitNotification(resident._id, {
    message,
    notificationType: "issue_accepted"
  });
};

// Notify when progress is updated on an issue
export const notifyProgressUpdated = async (issue, serviceTeamMember) => {
  const admin = await User.findOne({ accountType: "admin" });
  const resident = await User.findById(issue.createdBy);
  const message = `The progress on your issue "${issue.title}" has been updated`;

  await Notification.create({
    recipient: admin._id,
    sender: serviceTeamMember._id,
    message,
    issue: issue._id,
    notificationType: "progress_updated"
  });
  emitNotification(admin._id, {
    message,
    notificationType: "progress_updated"
  });

  await Notification.create({
    recipient: resident._id,
    sender: serviceTeamMember._id,
    message,
    issue: issue._id,
    notificationType: "progress_updated"
  });
  emitNotification(resident._id, {
    message,
    notificationType: "progress_updated"
  });
};

// -------------------- END --------------------
