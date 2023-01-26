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
exports.getData = void 0;
const getData_service_1 = require("../services/getData.service");
const postData_service_1 = require("../services/postData.service");
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'https://www.reuters.com';
    try {
        const resultGetData = yield (0, getData_service_1.getDataService)(url);
        yield (0, postData_service_1.postDataService)(resultGetData);
        return res.status(200).json(resultGetData);
    }
    catch (err) {
        console.log(err);
        res.status(400).send('Erro ao buscar dados.');
    }
});
exports.getData = getData;
