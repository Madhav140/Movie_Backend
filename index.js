"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
/* import router from './Routers/router'
 */ require("./DB/connections");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var MovieServer = (0, express_1.default)();
MovieServer.use((0, cors_1.default)());
MovieServer.use(express_1.default.json());
/* pfserver.use(router);
 */
var PORT = 4000 || process.env;
MovieServer.listen(PORT, function () {
    console.log("Server Running Successfully at port number ".concat(PORT));
});
MovieServer.get('/', function (req, res) {
    res.send("<h1 style=\"color:red\">Movie Database server running successfully</h1>");
});
