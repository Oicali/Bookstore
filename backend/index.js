const express = require("express");
const app = express();

const cors = require("cors");

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();

// MIDDLEWARE for security
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res
      .status(400)
      .send({ message: "Invalid JSON format or empty body" });
  }
  next();
});

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://book-app-frontend-tau.vercel.app",
//     ],
//     credentials: true,
//   })
// );

// ROUTES
const bookRoutes = require("./src/books/BookRoute");
// const orderRoutes = require("./src/orders/order.route")
// const userRoutes =  require("./src/users/user.route")
// const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes);
// app.use("/api/orders", orderRoutes)
// app.use("/api/auth", userRoutes)
// app.use("/api/admin", adminRoutes)

//9pTmVdFHvuAlhluC
//mongodb+srv://jairusilacio_db_user:9pTmVdFHvuAlhluC@cluster0.upqflly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main()
  .then(() => console.log("Mongodb connect successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
<<<<<<< Updated upstream

//test 22222222
=======
>>>>>>> Stashed changes
