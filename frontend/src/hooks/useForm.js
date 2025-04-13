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

  return { formData, handleInputChange, setFormData };
}