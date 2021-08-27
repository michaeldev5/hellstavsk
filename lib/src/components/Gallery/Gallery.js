"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Gallery = ({ children }) => (react_1.default.createElement("div", { className: "container mx-auto" },
    react_1.default.createElement("div", { className: "flex flex-wrap" }, children)));
exports.default = Gallery;
