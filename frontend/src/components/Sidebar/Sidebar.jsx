// // src/components/Sidebar/Sidebar.jsx
// import React, { useState } from 'react';
// import OutsideClickHandler from 'react-outside-click-handler';
// import { FaHome, FaBlog, FaUser, FaExclamationCircle, FaCommentDots, FaList, FaCog, FaSignOutAlt, FaChevronRight } from 'react-icons/fa';
// import logo from '../../assets/logo.png'; // Import the logo
// import styles from './Sidebar.module.css'; // Import CSS Module

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(false); // State for expanded/collapsed sidebar

//   // Toggle sidebar state
//   const toggleSidebar = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Close sidebar when clicking outside
//   const closeSidebar = () => {
//     if (isExpanded) {
//       setIsExpanded(false);
//     }
//   };

//   return (
//     <OutsideClickHandler onOutsideClick={closeSidebar}>
//       <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
//         {/* Logo */}
//         <div className={styles.logoContainer}>
//           <img src={logo} alt="Logo" className={styles.logo} />
//         </div>

//         {/* Expansion Button */}
//         <button className={styles.expandButton} onClick={toggleSidebar}>
//           <FaChevronRight className={styles.expandIcon} />
//         </button>

//         {/* Menu Items */}
//         <ul className={styles.menu}>
//           <li className={styles.menuItem}>
//             <FaHome className={styles.icon} />
//             {isExpanded && <span>Home</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaBlog className={styles.icon} />
//             {isExpanded && <span>Blog</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaUser className={styles.icon} />
//             {isExpanded && <span>Profile</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaExclamationCircle className={styles.icon} />
//             {isExpanded && <span>Report Issue</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaCommentDots className={styles.icon} />
//             {isExpanded && <span>Feedback</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaList className={styles.icon} />
//             {isExpanded && <span>Listed Issues</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaCog className={styles.icon} />
//             {isExpanded && <span>Settings</span>}
//           </li>
//           <li className={styles.menuItem}>
//             <FaSignOutAlt className={styles.icon} />
//             {isExpanded && <span>Logout</span>}
//           </li>
//         </ul>
//       </div>
//     </OutsideClickHandler>
//   );
// };

// export default Sidebar;


// src/components/Sidebar/Sidebar.jsx
import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaHome, FaBlog, FaUser, FaExclamationCircle, FaCommentDots, FaList, FaCog, FaSignOutAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Import the logo
import styles from './Sidebar.module.css'; // Import CSS Module

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expanded/collapsed sidebar

  // Toggle sidebar state
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  // Close sidebar when clicking outside
  const closeSidebar = () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={closeSidebar}>
      <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        {/* Logo or Text (CF.) */}
        <div className={styles.logoContainer}>
          {isExpanded ? (
            // <span className={styles.logoText}>CF.</span>
            <img src={logo} alt="Logo" className={styles.logo} />
          ) : (
            <span className={styles.logoText}>CF.</span>
          )}
        </div>

        {/* Expansion Button */}
        <button className={styles.expandButton} onClick={toggleSidebar}>
          {isExpanded ? (
            <FaChevronLeft className={styles.expandIcon} />
          ) : (
            <FaChevronRight className={styles.expandIcon} />
          )}
        </button>

        {/* Menu Items */}
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <FaHome className={styles.icon} />
            {isExpanded && <span>Home</span>}
          </li>
          <li className={styles.menuItem}>
            <FaBlog className={styles.icon} />
            {isExpanded && <span>Blog</span>}
          </li>
          <li className={styles.menuItem}>
            <FaUser className={styles.icon} />
            {isExpanded && <span>Profile</span>}
          </li>
          <li className={styles.menuItem}>
            <FaExclamationCircle className={styles.icon} />
            {isExpanded && <span>Report Issue</span>}
          </li>
          <li className={styles.menuItem}>
            <FaCommentDots className={styles.icon} />
            {isExpanded && <span>Feedback</span>}
          </li>
          <li className={styles.menuItem}>
            <FaList className={styles.icon} />
            {isExpanded && <span>Listed Issues</span>}
          </li>
          <li className={styles.menuItem}>
            <FaCog className={styles.icon} />
            {isExpanded && <span>Settings</span>}
          </li>
          <li className={styles.menuItem}>
            <FaSignOutAlt className={styles.icon}/>
            {isExpanded && <span>Logout</span>}
          </li>
        </ul>
      </div>
    </OutsideClickHandler>
  );
};

export default Sidebar;