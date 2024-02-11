"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const QuoteSchema = new mongoose_1.Schema({
    quote: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const QuoteModel = (0, mongoose_1.model)("quotes", QuoteSchema);
exports.default = QuoteModel;
//# sourceMappingURL=quote.js.map