"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_util_1 = require("../utils/jwt.util");
const verifyUser = async (req, res, next) => {
    const accessToken = req.headers["access-token"];
    if (!accessToken) {
        return next();
    }
    const { data } = (0, jwt_util_1.verifyJwt)(accessToken);
    if (data) {
        res.locals.user = data;
        return next();
    }
    return next();
};
exports.default = verifyUser;
