"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GalleryItem = ({ imageSrc }) => (react_1.default.createElement("div", { className: "px-2 flex-grow md:flex-1/2 md:max-w-1/2 lg:flex-1/4 lg:max-w-1/4" },
    react_1.default.createElement("a", { href: imageSrc },
        react_1.default.createElement("img", { alt: "gallery", className: "mt-4 mb-0 w-full", src: imageSrc }))));
exports.default = GalleryItem;
