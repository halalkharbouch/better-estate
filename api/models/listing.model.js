import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  additionalSpaces: {
    type: String,
  },
  heating: {
    type: String,
    required: true,
  },
  disabledAccess: {
    type: String,
    required: true,
  },
  security: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  constructionYear: {
    type: Number,
    required: true,
  },
  renovationYear: {
    type: Number,
    required: true,
  },
  parking: {
    type: Number,
    required: true,
  },
  garden: {
    type: Number,
    required: true,
  },
  furnished: {
    type: Boolean,
    required: true,
  },
  airConditioning: {
    type: Boolean,
    required: true,
  },
  firePlace: {
    type: Boolean,
    required: true,
  },
  elevator: {
    type: Boolean,
    required: true,
  },
  ventilation: {
    type: Boolean,
    required: true,
  },
  intercom: {
    type: Boolean,
    required: true,
  },
  cableTv: {
    type: Boolean,
    required: true,
  },
  internet: {
    type: Boolean,
    required: true,
  },
  garage: {
    type: Boolean,
    required: true,
  },
  
  petFriendly: {
    type: Boolean,
    required: true,
  },
  
  pool: {
    type: Boolean,
    required: true,
  },
  
  images: {
    type: Array,
    required: true,
  },
}, { timestamps: true });

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
