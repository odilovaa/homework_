const {Schema, model} = require("mongoose");

const schema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    job: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    job_experiance: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", schema);