import express, { Request, Response } from "express";
import cors from "cors"
import config from "config";
import connect from "./utils/connect";
import routes from "./routes";
import verifyUser from "./middleware/verify";

const port = config.get<number>("port");

const app = express();

app.use(express.json());
app.use(verifyUser)
app.use(cors({
  origin: ["http://127.0.0.1:5174","http://127.0.0.1:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  await connect(); 

  routes(app);
});