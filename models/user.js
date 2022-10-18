const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    course: { type: String },
    token: String,
    resetPasswordToken: String,
    role: {
      type: String,
      enum: ["Teacher", "Student", "Admin"],
      default: "Student",
    },
    CRA: {
      type: Number,
      min: 0,
      max: 10,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

module.exports = mongoose.model("user", userSchema);
