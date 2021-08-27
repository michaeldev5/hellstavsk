"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_responsive_carousel_1 = require("react-responsive-carousel");
require("react-responsive-carousel/lib/styles/carousel.min.css"); // requires a loader
const CarouselWrapper = ({ images }) => (react_1.default.createElement("div", { className: "container mx-auto max-w-sm p-4" },
    react_1.default.createElement(react_responsive_carousel_1.Carousel, { showStatus: false, infiniteLoop: true }, images.map(image => (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { src: image, alt: "" })))))));
exports.default = CarouselWrapper;
