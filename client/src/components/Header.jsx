import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="flex justify-between items-center mx-[10%] p-3">
      <Link to={"/"}>
        <motion.h1
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 2px rgb(255,255,255)",
            transition: {
              duration: 0.3,
              yoyo: Infinity,
            },
          }}
        >
          <span>Better</span>
          <span className="text-[#696970]">Estate</span>
        </motion.h1>
      </Link>
      <ul className="flex justify-evenly gap-10">
        <Link to={"/"}>
          <motion.li
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
            }}
          >
            Home
          </motion.li>
        </Link>
        <Link to={"/about"}>
          <motion.li
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
            }}
          >
            About
          </motion.li>
        </Link>
        <Link to={"/contact"}>
          <motion.li
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
            }}
          >
            Contact
          </motion.li>
        </Link>
      </ul>
      {currentUser ? (
        <motion.img width={35} whileHover={{
          scale: 1.1,
          border: '2px solid #525CEB',
          transition: {
            duration: 0.3,
            yoyo: Infinity,
          }
        }} src={currentUser.avatar} alt="" className="rounded-full cursor-pointer"/>
      ) : (
        <Link to={"/login"}>
          <motion.button
            whileHover={{
              scale: 1.05,

              boxShadow: "0px 0px 8px rgb(255,255,255)",
              transition: {
                duration: 0.3,
                yoyo: Infinity,
              },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#696970] px-4 py-1 rounded-lg hover:opacity-90"
          >
            Login
          </motion.button>
        </Link>
      )}
    </header>
  );
}
