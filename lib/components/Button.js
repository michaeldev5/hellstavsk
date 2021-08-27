"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button = ({ label, Icon, href }) => (react_1.default.createElement("a", { href: href, className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center hover:cursor-pointer", target: "_blank" },
    Icon,
    react_1.default.createElement("span", null, label)));
exports.default = Button;
