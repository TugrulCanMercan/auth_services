"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RouterModule_1 = __importDefault(require("./RouterModule"));
const db_connection_1 = __importDefault(require("./Infrustructures/Db-access/db-connection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(RouterModule_1.default);
app.listen(PORT, () => {
    (0, db_connection_1.default)();
    // mongoose.connect("mongodb://admin:password@mongo:27017/")
    console.log(PORT + "dinleniyor");
});
