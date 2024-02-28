"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTask = exports.validateEmail = exports.validateLogin = exports.validateSignup = void 0;
function checkEmail(email, res) {
    if (!email.includes("@")) {
        res.status(400).send("BAD REQUEST: email should contain @");
    }
}
async function validateSignup(req, res, next) {
    const { name, email, password } = req.body;
    if (!(email && password && name)) {
        res.status(400).send("BAD REQUEST: all fields are required");
    }
    checkEmail(email, res);
    next();
}
exports.validateSignup = validateSignup;
async function validateLogin(req, res, next) {
    const { email, password } = req.body;
    if (!(email && password)) {
        res.status(400).send("BAD REQUEST: both email and password fields are required");
    }
    checkEmail(email, res);
    next();
}
exports.validateLogin = validateLogin;
async function validateEmail(req, res, next) {
    const { email } = req.body;
    if (!email) {
        res.status(400).send("BAD REQUEST: email field is required");
    }
    checkEmail(email, res);
    next();
}
exports.validateEmail = validateEmail;
async function validateTask(req, res, next) {
    const { title } = req.body;
    if (!(title)) {
        res.status(400).send("BAD REQUEST:  Can not leave both title and description empty");
    }
    next();
}
exports.validateTask = validateTask;
