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
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const utils_1 = require("../utils");
const requestValidation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, interval, index } = req.query;
    if (!limit || !interval || !index) {
        return next((0, utils_1.HttpError)(400, "Invalid request index"));
    }
    if (Number(limit) > 50) {
        return next((0, utils_1.HttpError)(429, "Too many requests"));
    }
    next();
});
exports.requestValidation = requestValidation;
