import { Router } from "express";

import { getRandomQuote } from "../controllers/quotes";

const router = Router();

router.get("/random-quote", getRandomQuote);

export { router };
