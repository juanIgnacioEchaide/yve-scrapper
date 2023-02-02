"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultService = void 0;
const constants_1 = require("../utils/constants");
const helpers_1 = require("../utils/helpers");
const ResultService = (res) => {
    const data = (0, helpers_1.scrapData)(constants_1.Sites.markovaPantalones);
    return res.send(data.toString());
};
exports.ResultService = ResultService;
