"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TeamMember = ({ name, desc, phone, imageSrc }) => (react_1.default.createElement("div", { className: "grid sm:grid-cols-3" },
    react_1.default.createElement("div", { className: "relative w-full h-48 max-h-full rounded shadow sm:h-auto" },
        react_1.default.createElement("img", { className: "absolute object-cover w-full h-full rounded", src: imageSrc, alt: name.toString() })),
    react_1.default.createElement("div", { className: "flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2" },
        react_1.default.createElement("p", { className: "text-lg font-bold m-0" }, name),
        react_1.default.createElement("p", { className: "mb-4 text-xs text-gray-800" }, desc),
        react_1.default.createElement("p", { className: "mb-4 text-sm tracking-wide text-gray-800" }, phone))));
exports.default = TeamMember;
