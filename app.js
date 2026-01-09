import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import {
  getUsers,
  insertUser,
  showById,
  updateUser,
  deleteUser
} from "./controllers/userController.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// category & product
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

// users
app.get("/users", getUsers);
app.post("/users", insertUser);
app.get("/users/:id", showById);
app.put("/users/:id", updateUser);      //PUT
app.delete("/users/:id", deleteUser);   //DELETE

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
