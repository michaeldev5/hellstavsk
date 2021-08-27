"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionHeader = ({ title, description }) => (react_1.default.createElement("div", { className: "flex flex-col text-center w-full mb-18 px-4" },
    react_1.default.createElement("h1", { className: "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900" }, title),
    description && (react_1.default.createElement("p", { className: "lg:w-2/3 mx-auto leading-relaxed text-base mb-5" }, description))));
exports.default = SectionHeader;
