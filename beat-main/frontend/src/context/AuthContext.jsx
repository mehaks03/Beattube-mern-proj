import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      // Store user ID if available
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setIsLoggedIn(true);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const register = async (fullName, email, password) => {
    setLoading(true);
    try {
      const response = await api.post("/auth/register", {
        fullName,
        email,
        password,
      });
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("userId", response.data.userId); // Store user ID if available
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    delete api.defaults.headers.common["Authorization"];
    setIsLoggedIn(false);
  };

  const forgotPassword = async (email) => {
    try {
      await api.post("/auth/forget-password", { email });
      alert("Password reset email sent!");
    } catch (err) {
      setError(err.response?.data?.error || "Request failed");
    }
  };

  const resetPassword = async (token, newPassword) => {
    try {
      await api.post("/auth/reset-password", { token, newPassword });
      alert("Password updated successfully!");
    } catch (err) {
      setError(err.response?.data?.error || "Reset failed");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
