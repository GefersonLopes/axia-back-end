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
exports.postDataService = void 0;
const news_entity_1 = require("../entities/news.entity");
const resetData_service_1 = require("./resetData.service");
const postDataService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const news = yield news_entity_1.New.find();
        if (news.length > 0) {
            (0, resetData_service_1.dellDatabase)();
        }
        data.filter((element) => __awaiter(void 0, void 0, void 0, function* () { return yield news_entity_1.New.create(element); }));
    }
    catch (error) {
        console.log(error);
    }
});
exports.postDataService = postDataService;
