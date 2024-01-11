import googleIcon from "../assets/media/icons/google-icon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

export default function () {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        setError(data.message);
        setLoading(false);
        return;
      }
      dispatch(signInSuccess(data));
      setLoading(false);
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
      setError(error.message);
      setLoading(false);
    }

    
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="bg-[#696970] text-center w-[90%] md:w-[70%] xl:w-[25%] rounded-lg bg-opacity-5 p-10 overflow-hidden">
        <div className="">
          <h1 className="mb-10 font-bold text-3xl space-x-2">Login</h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
            <input
              className="p-2 rounded-md outline-none border border-[#696970] bg-transparent"
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <input
              className="p-2 rounded-md outline-none border border-[#696970] bg-transparent"
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#525CEB] text-white p-2 rounded-md"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#131314]  flex gap-3 items-center justify-center p-2 rounded-md"
            >
              <img width={25} src={googleIcon} alt="google-icon" />
              <span>Continue with google</span>
            </motion.button>
          </form>
        </div>
        <div className="mt-5">
          <p className="text-xs">
            New to betterEstate? <br />
            <Link
              to={"/register"}
              className="text-[#525CEB] hover:underline cursor-pointer"
            >
              Click here to register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
