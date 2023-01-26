"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.NewSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
    },
    datatime: {
        type: Date,
    },
    link: {
        type: String,
    },
});
