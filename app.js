"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var App = /** @class */ (function () {
    function App() {
        this._express = express_1.default();
        this._port = process.env.PORT || "3000";
    }
    // TODO: Add more things here, ex. middlewares.
    // TODO: Also needed are repositories and models for the data
    // TODO: This project is gonna use a mongoDB, and be hosted in heroku (i think)
    // TODO: Set up CI/CD flow
    App.prototype.start = function () {
        var _this = this;
        this._express.listen(this._port, function () {
            console.log("Listening on port " + _this._port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map