import { useState } from "react";
import Header from "../components/Header";
import Select from "react-select";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddListing() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    author: currentUser,
    name: "",
    description: "",
    type: "",
    location: "",
    additionalSpaces: "",
    heating: "",
    disabledAccess: "",
    security: "",
    price: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    constructionYear: "",
    renovationYear: "",
    parking: "",
    garden: "",
    furnished: false,
    airConditioning: false,
    firePlace: false,
    elevator: false,
    cableTv: false,
    ventilation: false,
    intercom: false,
    internet: false,
    garage: false,
    petFriendly: false,
    pool: false,
    images: ["testimg"],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(formData);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/listing/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    navigate("/");
  };
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="mt-10 grid grid-cols-12 mx-[10%] p-3">
          <div className="col-span-8 pr-5 border-e border-primary border-opacity-80">
            <div className="flex flex-col gap-5">
              <div className="flex gap-3 justify-between">
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  name="name"
                  placeholder="Listing name"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  name="price"
                  placeholder="Price"
                  onChange={handleChange}
                  value={formData.price}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Size"
                  name="size"
                  onChange={handleChange}
                  value={formData.size}
                />
              </div>
              <div className="">
                <textarea
                  className="border p-3 w-full rounded-2xl border-primary bg-transparent "
                  placeholder="Description"
                  rows="6"
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                ></textarea>
              </div>
              <div className="flex gap-3 justify-between">
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Loaction"
                  name="location"
                  onChange={handleChange}
                  value={formData.location}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Construction Year"
                  name="constructionYear"
                  onChange={handleChange}
                  value={formData.constructionYear}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Renovation Year"
                  name="renovationYear"
                  onChange={handleChange}
                  value={formData.renovationYear}
                />
              </div>
              <div className="flex gap-3 justify-between">
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Additional Spaces e.g Attic"
                  name="additionalSpaces"
                  onChange={handleChange}
                  value={formData.additionalSpaces}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Disabled Access e.g Ramp"
                  name="disabledAccess"
                  onChange={handleChange}
                  value={formData.disabledAccess}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Security e.g 3 cameras"
                  name="security"
                  onChange={handleChange}
                  value={formData.security}
                />
              </div>
              <div className="flex gap-3 justify-between">
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Heating e.g NaturalGas"
                  name="heating"
                  onChange={handleChange}
                  value={formData.heating}
                />
                <input
                  className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Garden Size"
                  name="garden"
                  onChange={handleChange}
                  value={formData.garden}
                />
                <Select
                  className="w-[33%]"
                  styles={colorStyles}
                  placeholder={"Type"}
                  options={options}
                  name="type"
                  onChange={(option) =>
                    setFormData({ ...formData, type: option.value })
                  }
                />
              </div>
              <div className="flex gap-3">
                <input
                  className="border w-[12%] p-3 rounded-2xl border-primary bg-transparent "
                  type="text"
                  placeholder="Bedrooms"
                  name="bedrooms"
                  onChange={handleChange}
                  value={formData.bedrooms}
                />
                <input
                  className="border w-[14%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Bathrooms"
                  name="bathrooms"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />
                <input
                  className="border w-[11%] p-3 rounded-2xl border-primary bg-transparent "
                  type="Number"
                  placeholder="Parking"
                  name="parking"
                  onChange={handleChange}
                  value={formData.parking}
                />
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Furnished</label>
                  <input
                    name="furnished"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.furnished}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Air Conditiong</label>
                  <input
                    name="airConditioning"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.airConditioning}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Fire Place</label>
                  <input
                    name="firePlace"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.firePlace}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Elevator</label>
                  <input
                    name="elevator"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.elevator}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Ventilation</label>
                  <input
                    name="ventilation"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.ventilation}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Intercom</label>
                  <input
                    name="intercom"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.intercom}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Internet</label>
                  <input
                    name="internet"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.internet}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Garage</label>
                  <input
                    name="garage"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.garage}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Pet Friendly</label>
                  <input
                    name="petFriendly"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.petFriendly}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Pool</label>
                  <input
                    name="pool"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.pool}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label className="text-lg">Cable Tv</label>
                  <input
                    name="cableTv"
                    className="size-5"
                    type="checkbox"
                    onChange={handleChange}
                    value={formData.cableTv}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 px-5 flex flex-col gap-5 flex-1">
            <p className="text-xl ">
              Images:
              <br />
              <span className="pt-1 text-xs text-primary">
                The fisrt image will be the cover
              </span>
            </p>

            <div className="flex gap-4">
              <motion.div
                whileTap={{
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                  scale: 1.09,
                  transition: {
                    duration: 0.3,
                    yoyo: Infinity,
                  },
                }}
                whileHover={{
                  scale: 0.98,
                }}
                className="relative overflow-hidden px-8 py-4 rounded-2xl bg-slate-500"
              >
                <label className="uppercase text-lg">choose images</label>
                <input
                  className="opacity-0 absolute top-0 left-0 h-full w-full cursor-pointer"
                  type="file"
                />
              </motion.div>
              <motion.button
                type="button"
                whileTap={{
                  boxShadow: "0px 0px 8px rgb(82,92,235)",
                  scale: 1.09,
                  transition: {
                    duration: 0.3,
                    yoyo: Infinity,
                  },
                }}
                whileHover={{
                  scale: 0.98,
                }}
                className="px-7 py-4 rounded-2xl bg-secondary uppercase"
              >
                Upload
              </motion.button>
            </div>
            <div className="">
              <motion.button
                type="submit"
                whileTap={{
                  boxShadow: "0px 0px 8px rgb(22,163,74)",
                  scale: 1.09,
                  transition: {
                    duration: 0.3,
                    yoyo: Infinity,
                  },
                }}
                whileHover={{
                  scale: 0.98,
                }}
                className="px-8 py-4 w-full uppercase bg-green-600 rounded-2xl"
              >
                Create Listing
              </motion.button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const options = [
  { value: "Rent", label: "Rent", color: "#fafafa" },
  { value: "Sell", label: "Sell", color: "#fafafa" },
];

const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
    border: "1px solid #696970",
    borderRadius: "1rem",
    width: "100%",
    height: "100%",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#525CEB" : "#09090b",
      color: data.color,
      cursor: isDisabled ? "not-allowed" : "pointer",
    };
  },
  menu: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
};
