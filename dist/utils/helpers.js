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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrapData = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const client_1 = require("../client");
const selector = 'div';
const scrapData = (site) => __awaiter(void 0, void 0, void 0, function* () {
    yield client_1.client.get(site)
        .then((response) => {
        const $ = cheerio_1.default.load(response.data);
        const itemDescriptions = $(selector);
        console.log(itemDescriptions.text());
    })
        .catch(err => console.log(err));
});
exports.scrapData = scrapData;
