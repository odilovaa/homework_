const {Schema, model} = require("mongoose");

const schema = new Schema(
  {
    company_name: {
      type: String,
      required: true,
      trim: true,
    },
    job_name: {
      type: Number,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    requirement: {
        type: String,
        required: true,
    },
    gaphic: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("vacancy", schema);