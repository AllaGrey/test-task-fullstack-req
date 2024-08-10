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
exports.CtrlWrapper = void 0;
const HttpError_1 = require("./HttpError");
const CtrlWrapper = (ctrl) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield ctrl(req, res, next);
        }
        catch (err) {
            const error = err;
            if (error.status) {
                next(error);
            }
            else {
                next((0, HttpError_1.HttpError)(500, "Internal Server Error"));
            }
        }
    });
};
exports.CtrlWrapper = CtrlWrapper;
