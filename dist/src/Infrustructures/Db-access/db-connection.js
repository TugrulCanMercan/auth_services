"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnection() {
    mongoose_1.default.connect("mongodb://admin:password@localhost:27017/admin");
    mongoose_1.default.connection
        .once('open', () => console.log("bağlantı başarılı"))
        .on("error", (error) => {
        console.log(error);
    });
}
exports.default = dbConnection;
