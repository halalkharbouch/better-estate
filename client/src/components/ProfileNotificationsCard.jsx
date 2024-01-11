import { useSelector } from "react-redux";
import { motion } from "framer-motion";                   

export default function ProfileNotificationsCard() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex flex-col justify-center text-center bg-[#696970] p-10 rounded-2xl bg-opacity-5">
      <h1 className="text-2xl font-semibold">Notifications</h1>
        <div className="mt-10 flex justify-between border-b-2 border-[#696970] pb-2">
            <div className="flex gap-2">
                <img className="rounded-full" width={25} src={currentUser.avatar} alt="" />
                <h1 className="">Halal </h1>
            </div>
          <h2 className="">Sent you a message</h2>
        </div>
        <div className="mt-2 flex justify-between border-b-2 border-[#696970] pb-2">
            <div className="flex gap-2">
                <img className="rounded-full" width={25} src={currentUser.avatar} alt="" />
                <h1 className="">Halal </h1>
            </div>
          <h2 className="">Sent you a message</h2>
        </div>
        
        <div className="mt-10 mx-auto">
          <motion.button whileHover={{
                scale: 1.02,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
                transition: {
                  duration: 0.3,
                  yoyo: Infinity,
                },
              }}
              whileTap={{ scale: 0.9 }}  className="px-8 py-3 rounded-3xl bg-[#696970]">
            View All Messages
          </motion.button>
        </div>
      </div>
    </div>
  );
}
