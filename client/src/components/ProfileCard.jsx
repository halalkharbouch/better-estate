import { useSelector } from "react-redux";
import { motion, useAnimationControls } from "framer-motion";

export default function ProfileCard() {
  const { currentUser } = useSelector((state) => state.user);
  const controls = useAnimationControls();

  const handleHover = () => {
    controls.start("hover");
  };

  const handleMouseLeave = () => {
    controls.start("initial");
  };

  return (
    <div>
      <motion.div
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col justify-center bg-[#696970] p-10 rounded-2xl bg-opacity-5 h-full"
      >
        <div className="overflow-hidden rounded-2xl">
            <motion.img
          variants={{
            initial: {
              scale: 1,
            },
            hover: {
              scale: 1.1,
              transition: {
                duration: 0.3,
              },
            },
          }}
          initial="initial"
          animate={controls}
          width={400}
          src={currentUser.avatar}
          alt=""
        
        />
        </div>

        
        <div className="mt-10 flex justify-between border-b-2 border-[#696970] pb-2">
          <h1 className="">Email: </h1>
          <h2 className="">{currentUser.email}</h2>
        </div>
        <div className="flex mt-3 justify-between border-b-2 border-[#696970] pb-2">
          <h1 className="">Username: </h1>
          <h2 className="">{currentUser.username}</h2>
        </div>
        <div className="mt-10 mb-4 mx-auto">
          <motion.button whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              whileTap={{ scale: 0.9 }}     
           className="px-8 py-3 rounded-3xl bg-[#696970]">
            Edit Profile
          </motion.button>
        </div>
        <div className="text-center text-[#525CEB] hover:underline cursor-pointer">
          <p>View all Listings</p>
        </div>
      </motion.div>
    </div>
  );
}
