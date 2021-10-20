"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterManager_1 = __importDefault(require("../Helpers/RouterManager"));
const LoginController_1 = __importDefault(require("../Controllers/LoginController"));
RouterManager_1.default.route("/deneme")
    .get((req, res) => {
    const controller = new LoginController_1.default();
    res.send(controller.userSing());
})
    .post((req, res) => {
    res.send(req.body);
});
exports.default = RouterManager_1.default;
