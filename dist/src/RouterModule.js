"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginApi_1 = __importDefault(require("./Api/LoginApi"));
const router = (0, express_1.Router)();
const routerModule = {
    imports: [
        LoginApi_1.default,
    ]
};
router.use(routerModule.imports);
exports.default = router;
