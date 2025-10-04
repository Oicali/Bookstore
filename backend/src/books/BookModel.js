const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


// const moment = require("moment-timezone");

// // Virtual field to display PH time
// bookSchema.virtual("createdAtPH").get(function () {
//   return moment(this.createdAt).tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss");
// });

// // Ensure virtuals are included when converting to JSON
// bookSchema.set("toJSON", { virtuals: true });
// bookSchema.set("toObject", { virtuals: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
