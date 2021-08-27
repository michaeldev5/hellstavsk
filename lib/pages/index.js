"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Download_1 = __importDefault(require("../components/Download"));
const Footer_1 = __importDefault(require("../components/Footer"));
const Projects_1 = __importDefault(require("../components/Projects"));
const MapWithContact_1 = __importDefault(require("../components/MapWithContact"));
const Nav_1 = __importDefault(require("../components/Nav"));
const Testimonials_1 = __importDefault(require("../components/Testimonials"));
const navigation_1 = __importDefault(require("../navigation"));
const Features_1 = __importDefault(require("../components/Features/Features"));
const Seo_1 = __importDefault(require("../components/Seo"));
const IndexPage = () => (React.createElement(React.Fragment, null,
    React.createElement(Seo_1.default, null),
    React.createElement(Nav_1.default, { navigation: navigation_1.default, showHero: true }),
    React.createElement(Features_1.default, null),
    React.createElement(Projects_1.default, null),
    React.createElement(Testimonials_1.default, null),
    React.createElement(Download_1.default, null),
    React.createElement(MapWithContact_1.default, null),
    React.createElement(Footer_1.default, { navigation: navigation_1.default })));
exports.default = IndexPage;
