"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSession = exports.findSessions = exports.createSession = void 0;
const session_model_1 = __importDefault(require("../models/session.model"));
async function createSession(userId, userAgent) {
    const session = await session_model_1.default.create({ user: userId, userAgent });
    return session.toJSON();
}
exports.createSession = createSession;
async function findSessions(query) {
    return session_model_1.default.find(query).lean();
}
exports.findSessions = findSessions;
async function updateSession(query, update) {
    return session_model_1.default.updateOne(query, update);
}
exports.updateSession = updateSession;
