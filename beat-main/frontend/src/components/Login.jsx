import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify"; // Import toast function
import "react-toastify/dist/ReactToastify.css"; // Ensure you have this import for default styles

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const {
    login,
    register,
    forgotPassword: requestForgotPassword,
    resetPassword,
    error,
    loading,
    setError,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    if (setError) setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (forgotPassword) {
        await requestForgotPassword(formData.email);
        setForgotPassword(false);
        toast.success("Password reset link sent to your email.", {
          style: {
            backgroundColor: "#28a745", // Green
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "14px",
          },
        });
      } else if (isLogin) {
        const response = await login(formData.email, formData.password);
        navigate("/browse");
        toast.success(`Welcome back ${response.fullName}!`, {
          style: {
            backgroundColor: "#28a745", // Green
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "14px",
          },
        });
      } else {
        await register(formData.fullName, formData.email, formData.password);
        toast.success("Registration successful!", {
          style: {
            backgroundColor: "#28a745", // Green
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "14px",
          },
        });
        setIsLogin(true); // Automatically switch to login after successful registration
      }
    } catch (err) {
      toast.error("An error occurred: " + (error || "Please try again."), {
        style: {
          backgroundColor: "#dc3545", // Red
          color: "white",
          borderRadius: "8px",
          padding: "10px",
          fontSize: "14px",
        },
      });
    }
  };

  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-screen object-cover"
          src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg"
          alt="background"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 ">
          <div className="bg-black mt-28 bg-opacity-60 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-100">
              {forgotPassword
                ? "Forgot Password"
                : isLogin
                ? "Sign In"
                : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit}>
              {forgotPassword ? (
                <div className="mb-4">
                  <label className="block text-gray-100 mb-2" htmlFor="email">
                    Enter your email to receive a password reset link
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border text-black rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 mt-4 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Reset Link"}
                  </button>
                </div>
              ) : (
                <>
                  {!isLogin && (
                    <div className="mb-4">
                      <label
                        className="block text-gray-100 mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <label className="block text-gray-100 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border text-black rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-100 mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-2 border text-black rounded"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : isLogin ? "Sign In" : "Sign Up"}
                  </button>
                </>
              )}
            </form>
            {error && <p className="mt-4 text-center text-red-500">{error}</p>}
            <div className="mt-4 text-center text-gray-300">
              {!forgotPassword ? (
                <>
                  <a
                    href="#"
                    className="text-white hover:underline cursor-pointer"
                    onClick={toggleForm}
                  >
                    {isLogin
                      ? "New to BeatTube ? Sign up now."
                      : "Already have an account? Sign in."}
                  </a>
                  <div className="mt-2">
                    <a
                      href="#"
                      className="text-gray-400 hover:underline cursor-pointer"
                      onClick={() => setForgotPassword(true)}
                    >
                      Forgot password?
                    </a>
                  </div>
                </>
              ) : (
                <a
                  href="#"
                  className="text-gray-400 hover:underline cursor-pointer"
                  onClick={() => setForgotPassword(false)}
                >
                  Back to Login/Signup
                </a>
              )}
              <p className="mt-4 text-xs text-gray-500">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Learn more
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
