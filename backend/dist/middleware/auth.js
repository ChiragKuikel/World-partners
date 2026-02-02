"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET); //{ userId: number }
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
};
exports.verifyAdmin = verifyAdmin;
exports.default = exports.verifyAdmin;
