"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FeatureItem = ({ title, content, icon }) => (react_1.default.createElement("div", { className: "xl:w-1/3 md:w-1/2 p-3" },
    react_1.default.createElement("div", { className: "border border-gray-200 p-5 rounded-lg hover:shadow-lg transition-all" },
        react_1.default.createElement("div", { className: "w-9 h-9 inline-flex items-center justify-center rounded-full bg-primary1light text-primary1 mb-4" }, icon),
        react_1.default.createElement("h2", { className: "text-base text-gray-900 font-medium title-font mb-2" }, title),
        react_1.default.createElement("p", { className: "leading-relaxed text-sm" }, content))));
exports.default = FeatureItem;
