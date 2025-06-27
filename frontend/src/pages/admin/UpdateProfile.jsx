"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {AdHeader} from "../../components/Dashboard/AdHeader";
import Sidebar from "../../components/Dashboard/AdSideBare";
import ProfileHeader from "../../components/Dashboard/ProfileHeader";
import EditableField from "../../components/Dashboard/EditableField";
import SaveButton from "../../components/Dashboard/SaveButton";
import { SettingsIcon } from "lucide-react";
import axios from "axios";
import { showSuccessToast, showWarningToast, showErrorToast } from "../../../../backend/utils/toastUtils";

const UpdateProfile = () => {
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
        }
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        accountType: "admin",
        address: "",
        phoneNumber: "",
        cnic: "",
        houseNo: "",
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
                    accountType: response.data.accountType || "admin",
                    cnic: response.data.cnic || "",
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                });
            } catch (error) {
                showErrorToast("Failed to fetch admin profile");
                // toast.error("Failed to fetch admin profile");
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

            const { success, message } = response.data;

            setLoading(false);

            if (success) {
                return { success: true };
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
            return { success: false };
        }

        setLoading(true);
        try {
            const userStatus = localStorage.getItem("status");

            if (userStatus === "suspended") {
                showWarningToast("Your account is suspended. You cannot perform this action.");
                return;
            }

            const response = await axios.put(
                "/api/users/password",
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
            setFormData((prev) => ({
                ...prev,
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            }));
        } catch (err) {
            toast.error("Failed to update password");
            return { success: false };
        }
        setLoading(false);
        return { success: true };
    };

    return (
        <div className="flex h-screen w-full bg-white overflow-hidden">
            <Sidebar
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />

            <div className="flex-1 ml-12 flex flex-col overflow-hidden">
                {/* <Header */}
                <AdHeader
                    setMobileMenuOpen={setMobileMenuOpen}
                    mobileMenuOpen={mobileMenuOpen}
                />

                <div className="flex-1 overflow-auto p-4 sm:p-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                            <h1 className="text-xl sm:text-2xl font-bold">Update Profile</h1>
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
                                    placeholder="Your name here..."
                                />
                                <EditableField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your email here..."
                                />
                                <EditableField
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Your full address here..."
                                />
                                <EditableField
                                    label="House No"
                                    name="houseNo"
                                    value={formData.houseNo}
                                    onChange={handleChange}
                                    placeholder="Your House No here..."
                                />
                                <EditableField
                                    label="CNIC"
                                    name="cnic"
                                    value={formData.cnic}
                                    onChange={handleChange}
                                    placeholder="Your CNIC here..."
                                />
                                <EditableField
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Your phone number here..."
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
                                            placeholder="Type your current password..."
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
                                            placeholder="Type your confirm password..."
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


export default UpdateProfile;