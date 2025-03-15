// // src/components/Sidebar/Sidebar.jsx
// import React from 'react';
// import { FaHome, FaBlog, FaUser, FaExclamationCircle, FaCommentDots, FaList, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import logo from '../../assets/logo.png'; // Import the logo
// import styles from './Sidebar.module.css'; // Import CSS Module

// const Sidebar = () => {
//   return (
//     <div className={styles.sidebar}>
//       {/* Logo */}
//       <div className={styles.logoContainer}>
//         <img src={logo} alt="Logo" className={styles.logo} />
//       </div>

//       {/* Menu Items */}
//       <ul className={styles.menu}>
//         <li className={styles.menuItem}>
//           <FaHome className={styles.icon} />
//           <span>Home</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaBlog className={styles.icon} />
//           <span>Blog</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaUser className={styles.icon} />
//           <span>Profile</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaExclamationCircle className={styles.icon} />
//           <span>Report Issue</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaCommentDots className={styles.icon} />
//           <span>Feedback</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaList className={styles.icon} />
//           <span>Listed Issues</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaCog className={styles.icon} />
//           <span>Settings</span>
//         </li>
//         <li className={styles.menuItem}>
//           <FaSignOutAlt className={styles.icon} />
//           <span>Logout</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";
// import { FaHome, FaUser, FaClipboardList, FaChartBar, FaEnvelope, FaCog, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
// import "../styles/Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>CommunityFix</h2>
//       <ul className="sidebar-menu">
//         <li>
//           <FaHome className="icon" />
//           <span>Dashboard</span>
//         </li>
//         <li>
//           <FaUser className="icon" />
//           <span>Profile</span>
//         </li>
//         <li>
//           <FaClipboardList className="icon" />
//           <span>My Complaints</span>
//         </li>
//         <li>
//           <FaChartBar className="icon" />
//           <span>Statistics</span>
//         </li>
//         <li>
//           <FaEnvelope className="icon" />
//           <span>Messages</span>
//         </li>
//         <li>
//           <FaCog className="icon" />
//           <span>Settings</span>
//         </li>
//         <li>
//           <FaQuestionCircle className="icon" />
//           <span>Help</span>
//         </li>
//         <li>
//           <FaSignOutAlt className="icon" />
//           <span>Logout</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
