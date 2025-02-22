import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import productsRouter from "./routes/productsRouter.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

// app.use("/", (req, res, next) => {
//   res.status(200).json({ message: "Hello World" });
// });

app.use("/api/products", productsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running");
});
