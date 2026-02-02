"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const jobs_1 = __importDefault(require("./routes/jobs"));
const blog_1 = __importDefault(require("./routes/blog"));
const applications_1 = __importDefault(require("./routes/applications"));
const contacts_1 = __importDefault(require("./routes/contacts"));
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const next_1 = __importDefault(require("next"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const dev = false; // production
// Next.js app path is root (since .next and app/ are at root)
const nextApp = (0, next_1.default)({
    dev,
    dir: path_1.default.join(__dirname, '..', '..'), // points to WORLD-PARTNERS-APP root
});
const handle = nextApp.getRequestHandler();
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({ origin: true }));
app.use((req, res, next) => {
    if (req.url.startsWith("/api/auth")) {
        next(); // let Next.js handle it
    }
    else {
        body_parser_1.default.json({ limit: "50mb" })(req, res, next);
    }
});
app.use((req, res, next) => {
    if (req.url.startsWith("/api/auth")) {
        next();
    }
    else {
        body_parser_1.default.urlencoded({ extended: true, limit: "50mb" })(req, res, next);
    }
});
// Routes
app.use("/api/jobs", jobs_1.default);
app.use("/api/blog", blog_1.default);
app.use("/api/applications", applications_1.default);
app.use("/api/contacts", contacts_1.default);
app.use("/api/backend/auth", auth_1.default);
// Health check
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
const PORT = process.env.PORT || 3001;
// Serve Next.js pages
nextApp.prepare().then(() => {
    app.all(/.*/, (req, res) => {
        return handle(req, res);
    });
    app.listen(PORT, () => {
        console.log(`Backend server running on port ${PORT}`);
    });
});
exports.default = app;
