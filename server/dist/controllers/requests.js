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
exports.getRequestsCtrl = void 0;
const utils_1 = require("../utils");
const getRequests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, interval, index } = req.query;
    const delay = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
        res
            .status(200)
            .json(`Request ${limit}_${interval}_${index} was completed successfully`);
    }, delay);
});
exports.getRequestsCtrl = (0, utils_1.CtrlWrapper)(getRequests);
