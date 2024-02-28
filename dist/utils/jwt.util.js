"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
function signJwt(object) {
    const signingKey = config_1.default.get("accessTokenPrivateKey");
    return jsonwebtoken_1.default.sign(object, signingKey, {
        expiresIn: 86400
    });
}
exports.signJwt = signJwt;
function verifyJwt(token) {
    const signingKey = config_1.default.get("accessTokenPrivateKey");
    try {
        const data = jsonwebtoken_1.default.verify(token, signingKey);
        return {
            valid: true,
            data,
        };
    }
    catch (e) {
        console.error(e);
        return {
            valid: false,
            expired: e.message === "jwt expired",
            data: null,
        };
    }
}
exports.verifyJwt = verifyJwt;
