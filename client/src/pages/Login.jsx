import googleIcon from "../assets/media/icons/google-icon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <div className="bg-[#696970] text-center w-[90%] md:w-[70%] xl:w-[25%] rounded-lg bg-opacity-5 p-10 overflow-hidden">
        <div className="">
          <h1 className="mb-10 font-bold text-3xl space-x-2">Login</h1>
        </div>
        <div className="">
          <form className="flex flex-col gap-4 mt-10">
            <input
              className="p-2 rounded-md outline-none border border-[#696970] bg-transparent"
              type="email"
              placeholder="Email"
            />
            <input
              className="p-2 rounded-md outline-none border border-[#696970] bg-transparent"
              type="password"
              placeholder="Password"
            />
            <motion.button whileHover={{
                scale:1.02,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition:{
                    duration:0.3,
                    yoyo:Infinity
                }
                
            }}
                whileTap={{scale:0.9}} className="bg-[#525CEB] text-white p-2 rounded-md">
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
            <Link to={'/register'} className="text-[#525CEB] hover:underline cursor-pointer">
              
              Click here to register
            
            </Link>
            
          </p>
        </div>
      </div>
    </div>
  );
}
