"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyData = exports.handleHttpError = void 0;
/**
 * Handles http errors and sends a response
 * @param res
 * @param error
 */
const handleHttpError = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.handleHttpError = handleHttpError;
/**
 * Sends an empty data response
 * @param res
 * @param error
 */
const emptyData = (res, error) => {
    res.status(404);
    res.send({ error });
};
exports.emptyData = emptyData;
//# sourceMappingURL=error-handlers.js.map