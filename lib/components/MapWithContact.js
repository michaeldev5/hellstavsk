"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const MapWithContact = () => (react_1.default.createElement("section", { className: "text-gray-600 body-font relative", id: "kontakt" },
    react_1.default.createElement("div", { className: "absolute inset-0 bg-gray-300" },
        react_1.default.createElement("iframe", { style: { filter: "grayscale(1) opacity(1)" }, marginHeight: 0, marginWidth: 0, title: "map", scrolling: "no", src: "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Vy%C5%A1n%C3%A1%20vo%C4%BEa%20108&ie=UTF8&t=&z=14&iwloc=B&output=embed", width: "100%", height: "100%", frameBorder: 0 })),
    react_1.default.createElement("div", { className: "container px-5 py-24 mx-auto flex" },
        react_1.default.createElement("div", { className: "lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" },
            react_1.default.createElement("h2", { className: "text-gray-900 text-lg mb-1 font-medium title-font" }, "KONTAKTN\u00DD FORMUL\u00C1R"),
            react_1.default.createElement("p", { className: "leading-relaxed mb-4 text-gray-600" }, "V pr\u00EDpade ak\u00FDchko\u013Evek ot\u00E1zok n\u00E1s nev\u00E1hajte kontaktova\u0165"),
            react_1.default.createElement("div", { className: "relative mb-3" },
                react_1.default.createElement("label", { htmlFor: "email", className: "leading-7 text-sm text-gray-600" }, "Meno"),
                react_1.default.createElement("input", { type: "text", id: "name", name: "name", className: "w-full bg-white rounded border border-gray-300 focus:border-primary1hover focus:ring-2 focus:ring-primary1hover text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" })),
            react_1.default.createElement("div", { className: "relative mb-3" },
                react_1.default.createElement("label", { htmlFor: "email", className: "leading-7 text-sm text-gray-600" }, "Telef\u00F3nne \u010D\u00EDslo"),
                react_1.default.createElement("input", { type: "tel", id: "phone", name: "phone", className: "w-full bg-white rounded border border-gray-300 focus:border-primary1hover focus:ring-2 focus:ring-primary1hover text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" })),
            react_1.default.createElement("div", { className: "relative mb-3" },
                react_1.default.createElement("label", { htmlFor: "email", className: "leading-7 text-sm text-gray-600" }, "Email"),
                react_1.default.createElement("input", { type: "email", id: "email", name: "email", className: "w-full bg-white rounded border border-gray-300 focus:border-primary1hover focus:ring-2 focus:ring-primary1hover text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" })),
            react_1.default.createElement("div", { className: "relative mb-3" },
                react_1.default.createElement("label", { htmlFor: "email", className: "leading-7 text-sm text-gray-600" }, "Slu\u017Eba"),
                react_1.default.createElement("input", { type: "text", id: "service", name: "service", className: "w-full bg-white rounded border border-gray-300 focus:border-primary1hover focus:ring-2 focus:ring-primary1hover text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out" })),
            react_1.default.createElement("div", { className: "relative mb-3" },
                react_1.default.createElement("label", { htmlFor: "message", className: "leading-7 text-sm text-gray-600" }, "Spr\u00E1va"),
                react_1.default.createElement("textarea", { id: "message", name: "message", className: "w-full bg-white rounded border border-gray-300 focus:border-primary1hover focus:ring-2 focus:ring-primary1hover h-32 text-sm outline-none text-gray-700 px-3 py-1 resize-none leading-6 transition-colors duration-200 ease-in-out", defaultValue: "" })),
            react_1.default.createElement("button", { className: "text-white bg-primary1 border-0 py-2 px-6 focus:outline-none hover:bg-primary1hover rounded text-base" }, "Odosla\u0165")))));
exports.default = MapWithContact;
