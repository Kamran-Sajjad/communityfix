import { useState } from "react";

export default function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (name, file) => {
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  
  
  // return { formData, handleInputChange, setFormData };

  return {
    formData,
    handleChange,
    handleRadioChange,
    handleInputChange,
    handleFileChange,
    setFormData,
  };
}
