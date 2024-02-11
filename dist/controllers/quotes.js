"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomQuote = void 0;
const quote_1 = __importDefault(require("../models/quote"));
const error_handlers_1 = require("../utils/error-handlers");
const error_handlers_2 = require("../utils/error-handlers");
/* Get random quote */
const getRandomQuote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield quote_1.default.aggregate([{ $sample: { size: 1 } }]);
        if (response.length === 0) {
            (0, error_handlers_1.emptyData)(res, "No quotes found");
        }
        else {
            res.send(response[0]);
        }
    }
    catch (error) {
        (0, error_handlers_2.handleHttpError)(res, "Error getting random quote");
    }
});
exports.getRandomQuote = getRandomQuote;
//# sourceMappingURL=quotes.js.map