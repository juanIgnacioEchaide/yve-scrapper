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
exports.ResultsHandler = void 0;
const ResultService_1 = require("../services/ResultService");
const ResultsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*     if(!req.params){
            throw new Error("params are missing")
        }
     */
    const serviceRes = yield (0, ResultService_1.ResultService)(res);
    /*     if (!serviceRes) {
            throw new Error("service failed")
        } */
    return serviceRes;
});
exports.ResultsHandler = ResultsHandler;
