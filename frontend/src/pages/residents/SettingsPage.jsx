




"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Header from "../../components/Rdashboard/Header";
import Sidebar from "../../components/Rdashboard/Sidebar";
import ProfileHeader from "../../components/Dashboard/ProfileHeader";
import EditableField from "../../components/Dashboard/EditableField";
import SaveButton from "../../components/Dashboard/SaveButton";
import { SettingsIcon } from "lucide-react";
import axios from "axios";
import { showSuccessToast,showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";

export default function SettingsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPasswordFormVisible, setIsPasswordFormVisible] = useState(false);
  const [profileImage, setProfileImage] = useState("/default-profile.png"); // default image
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
  
      // OPTIONAL: To send it to backend:
      // const formData = new FormData();
      // formData.append("profileImage", file);
      // axios.post("/api/users/upload-profile", formData, {
      //   headers: {
      //     Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
    }
  };
  

  const [formData, setFormData] = useState({
    fullName: "Kamran Sajjad",
    email: "Kami32@gmail.com",
    accountType: "resident",
    address: "",
    cnic: "",
    phoneNumber: "",
    houseNo:"",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("/api/users/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setFormData({
          fullName: response.data.fullName || "",
          email: response.data.email || "",
          address: response.data.address || "",
          houseNo: response.data.houseNo || "",
          phoneNumber: response.data.phoneNumber || "",
          accountType: response.data.accountType || "",
          cnic: response.data.cnic || "",
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        toast.error("Failed to fetch user profile");
      }
    };
  
    fetchProfile();
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const togglePasswordForm = () => {
    const userStatus = localStorage.getItem("status");

    if (userStatus === "suspended") {
      showWarningToast("Your account is suspended. You cannot perform this action.");
      return;
    }
    setIsPasswordFormVisible((prev) => !prev);
    if (!isPasswordFormVisible) {
      // Auto-scroll to the password form when it is shown
      setTimeout(() => {
        document.getElementById("password-change-form").scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    }
  };

 
  const handleSave = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return { success: false };
    }
  
    setLoading(true);
    try {
      const userStatus = localStorage.getItem("status");

      if (userStatus === "suspended") {
        showWarningToast("Your account is suspended. You cannot perform this action.");
        return;
      }
      const response = await axios.put("/api/users/profile", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      // ✅ Extract the 'success' value from the server response
      const { success, message } = response.data;
  
      setLoading(false);
  
      if (success) {
        return { success: true }; // 👈 This is what SaveButton checks!
      } else {
        toast.error(message || "Unexpected response from server.");
        return { success: false };
      }
    } catch (err) {
      toast.error("Failed to update profile");
      setLoading(false);
      return { success: false };
    }
  };
  

  const handlePasswordChange = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return{success:false};
    }

    setLoading(true);
    try {
      const userStatus = localStorage.getItem("status");

      if (userStatus === "suspended") {
        showWarningToast("Your account is suspended. You cannot perform this action.");
        return;
      }
      // Make API call to change password
      const response = await axios.put(
        "/api/users/password", // Assume backend route for password change
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
          confirmPassword: formData.confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      toast.success("Password updated successfully!");
      // return{success:true};
      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }));
    } catch (err) {
      toast.error("Failed to update password");
      return{success:false};
    }
    setLoading(false);
    return{success:true};
  };

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
        />

        <div className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4 sm:mb-6">
              <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>
            </div>
            <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
              <ProfileHeader
                name={formData.fullName}
                email={formData.email}
                accountType={formData.accountType}
                onEdit={togglePasswordForm} 
                profileImage={profileImage}
                onImageChange={handleImageChange}
              />
            </div>

            <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <EditableField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="your name here..."
                />

                <EditableField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your email here..."
                />

                <EditableField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="your full address here..."
                />
                <EditableField
                  label="House No"
                  name="houseNo"
                  value={formData.houseNo}
                  onChange={handleChange}
                  placeholder="your House No here..."
                />

                <EditableField
                  label="CNIC"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="your CNIC here..."
                />

                <EditableField
                  label="phone Number"
                  // type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="your Phone number here..."
                />
              </div>

              <SaveButton onClick={handleSave} data="Update Profile" />

              {/* Conditional rendering of the password change form */}
              {isPasswordFormVisible && (
                <div
                  id="password-change-form"
                  className="mt-6 bg-gray-100 rounded-lg p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <EditableField
                      label="Current Password"
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      placeholder="Type your Current password..."
                    />

                    <EditableField
                      label="New Password"
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      placeholder="Type your new password..."
                    />

                    <EditableField
                      label="Confirm Password"
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Type your Confirm password..."
                    />
                  </div>

                  <SaveButton
                    onClick={handlePasswordChange}
                    data="Update Password"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}










// "use client";

// import { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import Header from "../../components/Rdashboard/Header";
// import Sidebar from "../../components/Rdashboard/Sidebar";
// import ProfileHeader from "../../components/Dashboard/ProfileHeader";
// import EditableField from "../../components/Dashboard/EditableField";
// import SaveButton from "../../components/Dashboard/SaveButton";
// import { SettingsIcon } from "lucide-react";
// import axios from "axios";

// export default function SettingsPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isPasswordFormVisible, setIsPasswordFormVisible] = useState(false);
//   const [profileImage, setProfileImage] = useState("/default-profile.png"); // default image
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedImage(file);
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
  
      
//     }
//   };
  
  

//   const [formData, setFormData] = useState({
//     fullName: "Kamran Sajjad",
//     email: "Kami32@gmail.com",
//     accountType: "resident",
//     address: "",
//     cnic: "",
//     phoneNumber: "",
//     houseNo:"",
//     profileImage:"",
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get("/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         const imageUrl = response.data.profileImage
//         ? `http://localhost:5000/${response.data.profileImage.replace(/\\/g, '/')}`
//         : "/default-profile.png";

//       setProfileImage(imageUrl); 
//         setFormData({
//           fullName: response.data.fullName || "",
//           email: response.data.email || "",
//           address: response.data.address || "",
//           houseNo: response.data.houseNo || "",
//           phoneNumber: response.data.phoneNumber || "",
//           accountType: response.data.accountType || "",
//           cnic: response.data.cnic || "",
//           profileImage: response.data.profileImage || "",
//           currentPassword: "",
//           newPassword: "",
//           confirmPassword: "",
//         });
//       } catch (error) {
//         toast.error("Failed to fetch user profile");
//       }
//     };
  
//     fetchProfile();
//   }, []);

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };


//   const togglePasswordForm = () => {
//     setIsPasswordFormVisible((prev) => !prev);
//     if (!isPasswordFormVisible) {
//       // Auto-scroll to the password form when it is shown
//       setTimeout(() => {
//         document.getElementById("password-change-form").scrollIntoView({
//           behavior: "smooth",
//         });
//       }, 200);
//     }
//   };

 


//   const handleSave = async () => {
//     if (formData.newPassword !== formData.confirmPassword) {
//       toast.error("Passwords do not match.");
//       return { success: false };
//     }
  
//     const formDataToSend = new FormData();
  
//     // Append all text fields
//     formDataToSend.append("fullName", formData.fullName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("address", formData.address);
//     formDataToSend.append("houseNo", formData.houseNo);
//     formDataToSend.append("phoneNumber", formData.phoneNumber);
//     formDataToSend.append("accountType", formData.accountType);
//     formDataToSend.append("cnic", formData.cnic);
//     formDataToSend.append("newPassword", formData.newPassword);
//     formDataToSend.append("profileImage", selectedImage);
  
//     // Append image if selected
//     // if (selectedImage) {
//     // }
  
//     setLoading(true);
//     try {
//       const response = await axios.put("/api/users/profile", formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
  
//       const { success, message } = response.data;
  
//       setLoading(false);
  
//       if (success) {
//         toast.success("Profile updated successfully!");
//         return { success: true };
//       } else {
//         toast.error(message || "Unexpected response from server.");
//         return { success: false };
//       }
//     } catch (err) {
//       toast.error("Failed to update profile");
//       setLoading(false);
//       return { success: false };
//     }
//   };
  
  

//   const handlePasswordChange = async () => {
//     if (formData.newPassword !== formData.confirmPassword) {
//       toast.error("Passwords do not match.");
//       return{success:false};
//     }

//     setLoading(true);
//     try {
//       // Make API call to change password
//       const response = await axios.put(
//         "/api/users/password", // Assume backend route for password change
//         {
//           currentPassword: formData.currentPassword,
//           newPassword: formData.newPassword,
//           confirmPassword: formData.confirmPassword,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       toast.success("Password updated successfully!");
//       // return{success:true};
//       setFormData((prev) => ({
//         ...prev,
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       }));
//     } catch (err) {
//       toast.error("Failed to update password");
//       return{success:false};
//     }
//     setLoading(false);
//     return{success:true};
//   };

//   return (
//     <div className="flex h-screen w-full bg-white overflow-hidden">
//       <Sidebar
//         mobileMenuOpen={mobileMenuOpen}
//         setMobileMenuOpen={setMobileMenuOpen}
//         isExpanded={isExpanded}
//         setIsExpanded={setIsExpanded}
//       />

//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header
//           setMobileMenuOpen={setMobileMenuOpen}
//           mobileMenuOpen={mobileMenuOpen}
//         />

//         <div className="flex-1 overflow-auto p-4 sm:p-6">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex items-center mb-4 sm:mb-6">
//               <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
//               <h1 className="text-xl sm:text-2xl font-bold">Settings</h1>
//             </div>
//             <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
//               <ProfileHeader
//                 name={formData.fullName}
//                 email={formData.email}
//                 accountType={formData.accountType}
//                 onEdit={togglePasswordForm} 
//                 profileImage={profileImage}
//                 onImageChange={handleImageChange}
//               />
//             </div>

//             <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                 <EditableField
//                   label="Full Name"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="your name here..."
//                 />

//                 <EditableField
//                   label="Email"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your email here..."
//                 />

//                 <EditableField
//                   label="Address"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleChange}
//                   placeholder="your full address here..."
//                 />
//                 <EditableField
//                   label="House No"
//                   name="houseNo"
//                   value={formData.houseNo}
//                   onChange={handleChange}
//                   placeholder="your House No here..."
//                 />

//                 <EditableField
//                   label="CNIC"
//                   name="cnic"
//                   value={formData.cnic}
//                   onChange={handleChange}
//                   placeholder="your CNIC here..."
//                 />

//                 <EditableField
//                   label="phone Number"
//                   // type="tel"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="your Phone number here..."
//                 />
//               </div>

//               <SaveButton onClick={handleSave} data="Update Profile" />

//               {/* Conditional rendering of the password change form */}
//               {isPasswordFormVisible && (
//                 <div
//                   id="password-change-form"
//                   className="mt-6 bg-gray-100 rounded-lg p-6"
//                 >
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                     <EditableField
//                       label="Current Password"
//                       type="password"
//                       name="currentPassword"
//                       value={formData.currentPassword}
//                       onChange={handleChange}
//                       placeholder="Type your Current password..."
//                     />

//                     <EditableField
//                       label="New Password"
//                       type="password"
//                       name="newPassword"
//                       value={formData.newPassword}
//                       onChange={handleChange}
//                       placeholder="Type your new password..."
//                     />

//                     <EditableField
//                       label="Confirm Password"
//                       type="password"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       placeholder="Type your Confirm password..."
//                     />
//                   </div>

//                   <SaveButton
//                     onClick={handlePasswordChange}
//                     data="Update Password"
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
