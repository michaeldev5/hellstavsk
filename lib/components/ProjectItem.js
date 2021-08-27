"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ProjectItem = ({ project: { name, slug, subtitle, desc, mainImg }, imagesPath, }) => (react_1.default.createElement("div", { className: "lg:w-1/3 sm:w-1/2 p-4" },
    react_1.default.createElement("a", { href: `/${slug}`, className: "flex relative" },
        react_1.default.createElement("img", { alt: "gallery", className: "absolute inset-0 w-full h-full object-cover object-center", src: `/${imagesPath}/${slug}/${mainImg}` }),
        react_1.default.createElement("div", { className: "px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-all" },
            react_1.default.createElement("h2", { className: "tracking-widest text-sm title-font font-medium text-primary1 mb-1" }, name),
            react_1.default.createElement("h1", { className: "title-font text-lg font-medium text-gray-900 mb-3" }, subtitle),
            react_1.default.createElement("p", { className: "leading-relaxed mb-20" }, desc)))));
exports.default = ProjectItem;
