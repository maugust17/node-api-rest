import express from "express";
import cors from "cors";
import routerAuth from "./src/routes/auth.routes.js";
import routerProducts from "./src/routes/products.routes.js";
import { authenticateToken } from "./src/middleware/authentication.js";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", routerAuth);
app.use("/api", authenticateToken, routerProducts);
app.use((req, res, next) => {
    res.status(404).send({ error: "Not Found" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

