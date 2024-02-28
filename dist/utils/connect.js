"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
async function connect() {
    const dbUri = config_1.default.get("dbUri");
    try {
        mongoose_1.default.connect(dbUri);
        console.log("DB Connected!");
    }
    catch (error) {
        console.log(error);
        process.exit(0);
    }
}
exports.default = connect;
