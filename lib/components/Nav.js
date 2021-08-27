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
const react_1 = __importStar(require("react"));
const react_2 = require("@headlessui/react");
const outline_1 = require("@heroicons/react/outline");
const hero_jpg_1 = __importDefault(require("../assets/hero.jpg"));
const HellstavLogo_1 = __importDefault(require("./HellstavLogo"));
const Nav = ({ navigation, showHero = false }) => (react_1.default.createElement("div", { className: "relative bg-white" },
    react_1.default.createElement("div", { className: "max-w-7xl mx-auto" },
        react_1.default.createElement("div", { className: "relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32" },
            react_1.default.createElement("svg", { className: "hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2", fill: "currentColor", viewBox: "0 0 100 100", preserveAspectRatio: "none", "aria-hidden": "true" },
                react_1.default.createElement("polygon", { points: "50,0 100,0 50,100 0,100" })),
            react_1.default.createElement(react_2.Popover, null, ({ open }) => (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: "relative pt-6 px-4 sm:px-6 lg:px-8" },
                    react_1.default.createElement("nav", { className: "relative flex items-center justify-between sm:h-10 lg:justify-start", "aria-label": "Global" },
                        react_1.default.createElement("div", { className: "flex items-center flex-grow flex-shrink-0 lg:flex-grow-0" },
                            react_1.default.createElement("div", { className: "flex items-center justify-between w-full md:w-auto" },
                                react_1.default.createElement("a", { href: "/" },
                                    react_1.default.createElement("span", { className: "sr-only" }, "Workflow"),
                                    react_1.default.createElement(HellstavLogo_1.default, { width: 120 })),
                                react_1.default.createElement("div", { className: "-mr-2 flex items-center md:hidden" },
                                    react_1.default.createElement(react_2.Popover.Button, { className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary1" },
                                        react_1.default.createElement("span", { className: "sr-only" }, "Open main menu"),
                                        react_1.default.createElement(outline_1.MenuIcon, { className: "h-6 w-6", "aria-hidden": "true" }))))),
                        react_1.default.createElement("div", { className: "hidden md:block md:ml-10 md:pr-4 md:space-x-8" },
                            navigation.map(item => (react_1.default.createElement("a", { key: item.name, href: item.href, className: "font-medium text-gray-500 hover:text-gray-900" }, item.name))),
                            react_1.default.createElement("a", { href: "#kontakt", className: "font-medium text-primary1 hover:text-primary1hover" }, "Ozvite sa n\u00E1m!")))),
                react_1.default.createElement(react_2.Transition, { show: open, as: react_1.Fragment, enter: "duration-150 ease-out", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "duration-100 ease-in", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95" },
                    react_1.default.createElement(react_2.Popover.Panel, { focus: true, static: true, className: "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" },
                        react_1.default.createElement("div", { className: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden" },
                            react_1.default.createElement("div", { className: "px-5 pt-4 flex items-center justify-between" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement(HellstavLogo_1.default, { width: 80 })),
                                react_1.default.createElement("div", { className: "-mr-2" },
                                    react_1.default.createElement(react_2.Popover.Button, { className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary1" },
                                        react_1.default.createElement("span", { className: "sr-only" }, "Close main menu"),
                                        react_1.default.createElement(outline_1.XIcon, { className: "h-6 w-6", "aria-hidden": "true" })))),
                            react_1.default.createElement("div", { className: "px-2 pt-2 pb-3 space-y-1" }, navigation.map(item => (react_1.default.createElement("a", { key: item.name, href: item.href, className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" }, item.name)))),
                            react_1.default.createElement("a", { href: "#kontakt", className: "block w-full px-5 py-3 text-center font-medium text-primary1 bg-gray-50 hover:bg-gray-100" }, "Ozvite sa n\u00E1m!"))))))),
            showHero ? (react_1.default.createElement("main", { className: "mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28", id: "o-nas" },
                react_1.default.createElement("div", { className: "sm:text-center lg:text-left" },
                    react_1.default.createElement("h1", { className: "text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" },
                        react_1.default.createElement("span", { className: "block xl:inline" },
                            "Modern\u00E9",
                            react_1.default.createElement("br", null)),
                        react_1.default.createElement("span", { className: "block text-primary1 xl:inline" }, "kreat\u00EDvne rie\u0161enia")),
                    react_1.default.createElement("p", { className: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" }, "Pon\u00FAkame kvalitn\u00E9 mur\u00E1rske pr\u00E1ce a stavebn\u00FA \u010Dinnos\u0165 so zodpovedn\u00FDm pr\u00EDstupom."),
                    react_1.default.createElement("div", { className: "mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start" },
                        react_1.default.createElement("div", { className: "rounded-md shadow" },
                            react_1.default.createElement("a", { href: "#projekty", className: "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary1 hover:bg-primary1hover md:py-4 md:text-lg md:px-10" }, "Na\u0161e projekty")))))) : null)),
    showHero ? (react_1.default.createElement("div", { className: "lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2" },
        react_1.default.createElement("img", { className: "h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full", src: hero_jpg_1.default, alt: "" }))) : null));
exports.default = Nav;
