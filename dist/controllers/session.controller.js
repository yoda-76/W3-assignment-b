"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSessionHandler = exports.createUserSessionHandler = void 0;
const session_service_1 = require("../services/session.service");
const user_service_1 = require("../services/user.service");
const jwt_util_1 = require("../utils/jwt.util");
async function createUserSessionHandler(req, res) {
    const user = await (0, user_service_1.validatePassword)(req.body);
    if (!user) {
        return res.status(401).send("Invalid email or password");
    }
    const session = await (0, session_service_1.createSession)(user._id, req.get("user-agent") || "");
    const accessToken = (0, jwt_util_1.signJwt)({ ...user, session: session._id });
    return res.status(200).send({ message: "Logged in", accessToken });
}
exports.createUserSessionHandler = createUserSessionHandler;
// export async function getUserSessionsHandler(req: Request, res: Response) {
//   const userId = res.locals.user._id;
//   const sessions = await findSessions({ user: userId, valid: true });
//   return res.send(sessions);
// }
async function deleteSessionHandler(req, res) {
    console.log(res.locals);
    const sessionId = res.locals.user.session;
    await (0, session_service_1.updateSession)({ _id: sessionId }, { valid: false });
    return res.send({
        message: "Logged out", accessToken: null
    });
}
exports.deleteSessionHandler = deleteSessionHandler;
