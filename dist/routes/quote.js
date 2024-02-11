"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const quotes_1 = require("../controllers/quotes");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/random-quote", quotes_1.getRandomQuote);
//# sourceMappingURL=quote.js.map