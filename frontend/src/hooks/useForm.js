import { useState } from "react";

export default function useForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (name, file) => {
    setFormData(prev => ({
      ...prev,
      [name]: file
    }));
  };

  return {
    formData,
    handleChange,
    handleRadioChange,
    handleFileChange,
    setFormData
  };
}