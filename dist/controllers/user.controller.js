"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserHandler = void 0;
const user_service_1 = require("../services/user.service");
async function createUserHandler(req, res) {
    try {
        const user = await (0, user_service_1.createUser)(req.body);
        return res.status(200).send(user);
    }
    catch (e) {
        console.error(e);
        return res.status(409).send(e.message);
    }
}
exports.createUserHandler = createUserHandler;
