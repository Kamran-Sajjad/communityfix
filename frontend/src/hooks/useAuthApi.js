// hooks/useAuthApi.js
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const useAuthApi = () => {
  const { token } = useContext(AuthContext);

  const fetchWithAuth = async (url, method = "GET", data = null) => {
    try {
      const response = await axios(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data,
      });
      return response.data;
    } catch (error) {
      console.error("Error response:", error.response);
      throw new Error(error.response?.data?.message || "Something went wrong");
    }
  };

  return { fetchWithAuth };
};

export default useAuthApi;
