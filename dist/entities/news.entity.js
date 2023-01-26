"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.New = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const new_schema_1 = require("../schema/new.schema");
exports.New = mongoose_1.default.model('New', new_schema_1.NewSchema);
