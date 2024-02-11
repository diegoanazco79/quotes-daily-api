import { Response } from "express";

/**
 * Handles http errors and sends a response
 * @param res
 * @param error
 */
const handleHttpError = (res: Response, error: string) => {
  res.status(500);
  res.send({ error });
};

/**
 * Sends an empty data response
 * @param res
 * @param error
 */
const emptyData = (res: Response, error: string) => {
  res.status(404);
  res.send({ error });
};

export { handleHttpError, emptyData };
