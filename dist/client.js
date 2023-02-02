"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const axios_1 = __importDefault(require("axios"));
const client = axios_1.default.create({
    withCredentials: false,
    headers: {
        'Authorization': '*'
    }
});
exports.client = client;
