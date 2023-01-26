"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dellDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const new_schema_1 = require("../schema/new.schema");
const dellDatabase = () => {
    const Model = mongoose_1.default.model('New', new_schema_1.NewSchema);
    Model.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
    });
};
exports.dellDatabase = dellDatabase;
