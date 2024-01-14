import React from "react";
import Header from "../components/Header";
import Select from "react-select";

export default function AddListing() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="mt-10 grid grid-cols-12 mx-[10%] p-3">
        <div className="col-span-8">
          <form className="flex flex-col gap-5">
            <div className="flex gap-3 justify-between">
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Listing name"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Price"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Size"
              />
            </div>
            <div className="">
              <textarea
                className="border p-3 w-full rounded-2xl border-primary bg-transparent "
                placeholder="Description"
                rows="10"
              ></textarea>
            </div>
            <div className="flex gap-3 justify-between">
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Loaction"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Construction Year"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Renovation Year"
              />
            </div>
            <div className="flex gap-3 justify-between">
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Additional Spaces e.g Attic"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Disabled Access e.g Ramp"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Security e.g 3 cameras"
              />
            </div>
            <div className="flex gap-3 justify-between">
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Heating e.g NaturalGas"
              />
              <input
                className="border w-[33%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Garden Size"
              />
              <Select
                className="w-[33%]"
                styles={colorStyles}
                
                placeholder={"Type"}
                options={options}
              />
            </div>
            <div className="flex gap-3">
              <input
                className="border w-[12%] p-3 rounded-2xl border-primary bg-transparent "
                type="text"
                placeholder="Bedrooms"
              />
              <input
                className="border w-[14%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Bathrooms"
              />
              <input
                className="border w-[11%] p-3 rounded-2xl border-primary bg-transparent "
                type="Number"
                placeholder="Parking"
              />
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <label className="text-lg">Furnished</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Air Conditiong</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Fire Place</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Elevator</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Ventilation</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Intercom</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Cable Tv</label>
                <input className="size-5" type="checkbox" />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <label className="text-lg">Internet</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Garage</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Pet Friendly</label>
                <input className="size-5" type="checkbox" />
              </div>
              <div className="flex gap-2 items-center">
                <label className="text-lg">Pool</label>
                <input className="size-5" type="checkbox" />
              </div>
              
            </div>
            
          </form>
        </div>
      </div>
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
      backgroundColor: isFocused ? '#525CEB' : '#09090b',
      color: data.color,
      cursor: isDisabled ? "not-allowed" : "pointer",
    };
  },
  menu: (styles) => ({
    ...styles,
    backgroundColor: 'transparent'
  }),
}
