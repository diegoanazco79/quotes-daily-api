import { Schema, model } from "mongoose";

import { Quote } from "../interfaces/quote";

const QuoteSchema = new Schema<Quote>(
  {
    quote: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const QuoteModel = model<Quote>("quotes", QuoteSchema);

export default QuoteModel;
