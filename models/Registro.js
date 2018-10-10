const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegistroSchema = new Schema(
  {
    inicial: Number,
    final: Number,
    primos: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("Registro", RegistroSchema);
