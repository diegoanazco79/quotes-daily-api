import "dotenv/config";
import express from "express";
import cors from "cors";

import { router as QuoteRouter } from "./routes/quote";

import config from "./config/config";
import dbConnect from "./config/mongo";

const PORT = config.port || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(QuoteRouter);

dbConnect().then(() => console.log("MongoDB connected"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
