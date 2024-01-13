import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProfileListingsCard() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <div className="flex flex-col justify-center text-center bg-[#696970] p-10 rounded-2xl bg-opacity-5">
        <h1 className="text-2xl font-semibold">Lisitngs</h1>
        <div className="mt-10 flex justify-between border-b-2 border-[#696970] pb-2">
          <h1 className="">Total Listings: </h1>
          <h2 className="">68</h2>
        </div>
        <div className="flex mt-3 justify-between border-b-2 border-[#696970] pb-2">
          <h1 className="">Total sell: </h1>
          <h2 className="">30</h2>
        </div>
        <div className="flex mt-3 justify-between border-b-2 border-[#696970] pb-2">
          <h1 className="">Total rent: </h1>
          <h2 className="">38</h2>
        </div>
        <div className="mt-10 mx-auto">
          <Link to={'/add-listing'}>
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
              className="px-8 py-3 rounded-3xl bg-[#696970]"
            >
              Add Lisitngs
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
