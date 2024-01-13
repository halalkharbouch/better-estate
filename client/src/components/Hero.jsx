import HeroImg from "../assets/media/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function Hero() {
  return (
    <div>
      <div className="grid lg:grid-cols-12 gap-10 mx-[10%] p-3">
        <div className="flex flex-col justify-center col-span-6">
          <h1 className="text-5xl font-bold mb-5">
            Buy, Sell and Rent your property with
            <span className="text-secondary"> Ease</span>
          </h1>
          <p>
            Making every step smooth, transparent, and tailored to your unique
            needs. Welcome home to a new era of real estate excellence.
          </p>
          <div className="">
            <Link to={"/login"}>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="px-16 py-4 bg-accent rounded-full mt-10"
              >
                Get Started
              </motion.button>
            </Link>
            
          </div>
        </div>
        <div className="col-span-6 relative z-0 ml-auto">
          <div className="">
            <svg
              width={600}
              opacity={0.1}
              className=""
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#696970"
                d="M52.9,-62.9C67.3,-51,76.7,-33.1,78.3,-15.1C79.9,2.9,73.7,20.9,64.2,36.9C54.7,52.8,42,66.7,25.3,75.4C8.5,84,-12.3,87.4,-29.3,81C-46.3,74.6,-59.6,58.3,-70.4,40.3C-81.1,22.3,-89.3,2.6,-85.4,-14.2C-81.4,-31,-65.3,-44.8,-49,-56.3C-32.8,-67.8,-16.4,-76.9,1.5,-78.7C19.3,-80.4,38.6,-74.7,52.9,-62.9Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="absolute top-20">
            <img className="" width={700} src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
