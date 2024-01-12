import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  FiEdit,
  FiLogOut,
} from "react-icons/fi";
import ProfileDropDown from "./ProfileDropDown";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

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
        <motion.div animate={open ? "open" : "closed"} className="relative">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center transition-colors"
          >
            <motion.img
              width={35}
              whileHover={{
                scale: 1.1,
                border: "2px solid #525CEB",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              src={currentUser.avatar}
              alt=""
              className="rounded-full cursor-pointer"
            />
    
          </button>

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
          >
            <ProfileDropDown setOpen={setOpen} Icon={FiEdit} text="Edit Profile" />
            <ProfileDropDown setOpen={setOpen} Icon={FiLogOut} text="Signout" />
            
          </motion.ul>
        </motion.div>
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

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};


