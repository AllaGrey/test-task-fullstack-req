"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const requestValidation_1 = require("../middlewares/requestValidation");
const requests_1 = require("../controllers/requests");
const requestRouter = express_1.default.Router();
requestRouter.get("/", requestValidation_1.requestValidation, requests_1.getRequestsCtrl);
exports.default = requestRouter;
