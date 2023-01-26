"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scraping = void 0;
const express_1 = require("express");
const getData_1 = require("../controllers/getData");
exports.scraping = (0, express_1.Router)();
exports.scraping.get('/data', getData_1.getData);
