


















// import React, { useState } from 'react';
// import { showSuccessToast, showErrorToast } from "../../../../backend/utils/toastUtils";
// import axios from 'axios';

// const CreateAdmin = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     address: '',
//     phoneNumber: '',
//     cnic: '',
//     agreeToTerms: false,
//   });
//   const [loading, setLoading] = useState(false);

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { fullName, email, password, address, phoneNumber, cnic, agreeToTerms } = formData;

//     // Validate the form data
//     if (!fullName || !email || !password || !address || !phoneNumber || !cnic || !agreeToTerms) {
//       showErrorToast("All fields are required.");
//       return;
//     }

//     setLoading(true);
//     try {
//       // Sending the request to create the admin
//       const res = await axios.post(
//         '/api/admin/create-admin',
//         { fullName, email, password, address, phoneNumber, cnic, agreeToTerms },
//         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//       );

//       showSuccessToast("Admin created successfully.");
      
//       // Reset form fields after success
//       setFormData({
//         fullName: '',
//         email: '',
//         password: '',
//         address: '',
//         phoneNumber: '',
//         cnic: '',
//         agreeToTerms: false,
//       });
//     } catch (error) {
//       console.error("Error creating admin:", error);
//       showErrorToast(error.response?.data?.message || "Something went wrong.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h2 className="text-2xl font-semibold mb-6">Create a New Admin</h2>
      
//       <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
//         {/* Full Name Field */}
//         <div>
//           <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter the full name"
//             required
//           />
//         </div>

//         {/* Email Field */}
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter the email"
//             required
//           />
//         </div>

//         {/* Password Field */}
//         <div>
//           <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter the password"
//             required
//           />
//         </div>

//         {/* Address Field */}
//         <div>
//           <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter the address"
//             required
//           />
//         </div>

//         {/* Phone Number Field */}
//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter the phone number"
//             required
//           />
//         </div>

//         {/* CNIC Field */}
//         <div>
//           <label htmlFor="cnic" className="block text-sm font-medium mb-1">CNIC</label>
//           <input
//             type="text"
//             id="cnic"
//             name="cnic"
//             value={formData.cnic}
//             onChange={handleInputChange}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             placeholder="Enter CNIC"
//             required
//           />
//         </div>

//         {/* Agree to Terms Checkbox */}
//         <div className="flex items-center">
//           <input
//             type="checkbox"
//             id="agreeToTerms"
//             name="agreeToTerms"
//             checked={formData.agreeToTerms}
//             onChange={handleInputChange}
//             className="mr-2"
//             required
//           />
//           <label htmlFor="agreeToTerms" className="text-sm">I agree to the <span className="text-blue-500">terms and conditions</span></label>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center mt-4">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-6 py-3 text-white bg-blue-500 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           >
//             {loading ? "Creating..." : "Create Admin"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateAdmin;

















import React, { useState } from 'react';
import { showSuccessToast, showErrorToast } from "../../../../backend/utils/toastUtils";
import axios from 'axios';
import AdSideBare from "../../components/Dashboard/AdSideBare";
import { AdHeader } from "../../components/Dashboard/AdHeader";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    cnic: '',
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, address, phoneNumber, cnic, agreeToTerms } = formData;

    // Validate the form data
    if (!fullName || !email || !password || !address || !phoneNumber || !cnic || !agreeToTerms) {
      showErrorToast("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      // Sending the request to create the admin
      const res = await axios.post(
        '/api/admin/create-admin',
        { fullName, email, password, address, phoneNumber, cnic, agreeToTerms },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      showSuccessToast("Admin created successfully.");
      
      // Reset form fields after success
      setFormData({
        fullName: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        cnic: '',
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Error creating admin:", error);
      showErrorToast(error.response?.data?.message || "Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100 relative">
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen bg-white shadow-md transition-all duration-300 z-30`}>
        <AdSideBare
          isExpanded={isSidebarExpanded}
          toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
        />
      </div>

      {/* Main Content */}
      <div className={`flex flex-col flex-1 w-full transition-all duration-300 md:ml-12 ${isSidebarExpanded ? "ml-4" : "ml-0"}`}>
        {/* Header */}
        <div className="sticky top-0 z-20 bg-white shadow-sm w-full">
          <AdHeader title="Create Admin" />
        </div>

        <div className="mt-6 px-4 sm:px-6 md:px-8">
          <h2 className="text-2xl font-semibold mb-6">Create a New Admin</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
            {/* Full Name and Email Fields - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>

            {/* Password and Address Fields - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter address"
                  required
                />
              </div>
            </div>

            {/* Phone Number and CNIC Fields - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label htmlFor="cnic" className="block text-sm font-medium mb-1">CNIC</label>
                <input
                  type="text"
                  id="cnic"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter CNIC"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="mr-2"
                required
              />
              <label htmlFor="agreeToTerms" className="text-sm">I agree to the <span className="text-blue-500">terms and conditions</span></label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 text-white bg-blue-500 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? "Creating..." : "Create Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
