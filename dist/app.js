"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ResultsHandler_1 = require("./handlers/ResultsHandler");
const constants_1 = require("./utils/constants");
const app = (0, express_1.default)();
const port = 8000;
const server = http_1.default.createServer(app);
app.get(constants_1.Route.results, (req, res) => {
    (0, ResultsHandler_1.ResultsHandler)(req, res);
});
server.listen(port, () => { console.log('hello world!'); });
