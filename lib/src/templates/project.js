"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Nav_1 = __importDefault(require("../components/Nav"));
const navigation_1 = __importDefault(require("../navigation"));
const Footer_1 = __importDefault(require("../components/Footer"));
const Carousel_1 = __importDefault(require("../components/Carousel"));
const ProjectPage = ({ pageContext: { images, project: { name, subtitle, desc }, }, }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Nav_1.default, { navigation: navigation_1.default }),
        react_1.default.createElement("div", { className: "container mx-auto px-4" },
            react_1.default.createElement("h1", null, name),
            react_1.default.createElement("h3", null, subtitle),
            react_1.default.createElement("p", null, desc)),
        react_1.default.createElement(Carousel_1.default, { images: images }),
        react_1.default.createElement(Footer_1.default, { navigation: navigation_1.default })));
};
exports.default = ProjectPage;
