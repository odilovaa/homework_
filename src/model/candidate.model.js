const {Schema, model} = require("mongoose");

const schema = new Schema(
  {
    vacancy_id: {
      type: Schema.Types.ObjectId,
      ref: "vacancy",
      required: true,
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("candidate", schema);