"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("config"));
const connect_1 = __importDefault(require("./utils/connect"));
const routes_1 = __importDefault(require("./routes"));
const verify_1 = __importDefault(require("./middleware/verify"));
const port = config_1.default.get("port");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(verify_1.default);
app.use((0, cors_1.default)({
    origin: ["http://127.0.0.1:5174", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.listen(port, async () => {
    console.log(`App is running at http://localhost:${port}`);
    await (0, connect_1.default)();
    (0, routes_1.default)(app);
});
