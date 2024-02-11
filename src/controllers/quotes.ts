import { Request, Response } from "express";

import QuoteModel from "../models/quote";

import { emptyData } from "../utils/error-handlers";
import { handleHttpError } from "../utils/error-handlers";

/* Get random quote */
const getRandomQuote = async (req: Request, res: Response) => {
  try {
    const response = await QuoteModel.aggregate([{ $sample: { size: 1 } }]);
    if (response.length === 0) {
      emptyData(res, "No quotes found");
    } else {
      res.send(response[0]);
    }
  } catch (error) {
    handleHttpError(res, "Error getting random quote");
  }
};

export { getRandomQuote };
