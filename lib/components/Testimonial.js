"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Testimonial = ({ name, content, imageSrc }) => (react_1.default.createElement("div", { className: "flex justify-center px-5 py-5" },
    react_1.default.createElement("div", { className: "w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50" },
        react_1.default.createElement("div", { className: "w-full pt-1 text-center pb-5 -mt-16 mx-auto" },
            react_1.default.createElement("a", { href: "/#", className: "block relative" },
                react_1.default.createElement("img", { alt: "profil", src: imageSrc, className: "mx-auto object-cover rounded-full h-20 w-20 " }))),
        react_1.default.createElement("div", { className: "w-full mb-10" },
            react_1.default.createElement("div", { className: "text-3xl text-primary1 text-left leading-tight h-3" }, "\u201C"),
            react_1.default.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-100 text-center px-5 m-0" }, content),
            react_1.default.createElement("div", { className: "text-3xl text-primary1 text-right leading-tight h-3" }, "\u201D")),
        react_1.default.createElement("div", { className: "w-full" },
            react_1.default.createElement("p", { className: "text-md text-primary1 font-bold text-center m-0" }, name)))));
exports.default = Testimonial;
