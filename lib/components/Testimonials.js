"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Testimonial_1 = __importDefault(require("./Testimonial"));
const customer1_png_1 = __importDefault(require("../assets/customer1.png"));
const customer2_png_1 = __importDefault(require("../assets/customer2.png"));
const customer3_png_1 = __importDefault(require("../assets/customer3.png"));
const SectionHeader_1 = __importDefault(require("./SectionHeader"));
const Testimonials = () => (react_1.default.createElement("div", { className: "px-4", id: "recenzie" },
    react_1.default.createElement(SectionHeader_1.default, { title: "Z\u00E1kazn\u00EDci", description: "Ak ste sa e\u0161te st\u00E1le nerozhodli\n      \u010Di si vyberiete n\u00E1s, pre\u010D\u00EDtajte si \n      recenzie od na\u0161ich spokojn\u00FDch \n      z\u00E1kazn\u00EDkov a z\u00E1kazn\u00ED\u010Dok." }),
    react_1.default.createElement("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 py-8" },
        react_1.default.createElement(Testimonial_1.default, { name: "Jozef Nov\u00E1k, Pre\u0161ov", content: "S vykonanou pr\u00E1cou som bol ve\u013Emi spokojn\u00FD, ur\u010Dite by som si Hellstav vybral znovu", imageSrc: customer1_png_1.default }),
        react_1.default.createElement(Testimonial_1.default, { name: "Arp\u00E1d Fekete, Ro\u017E\u0148ava", content: "Nem\u00E1m najmen\u0161iu s\u0165a\u017Enos\u0165. Bol som spokojn\u00FD.", imageSrc: customer2_png_1.default }),
        react_1.default.createElement(Testimonial_1.default, { name: "\u013Dubica Gmiterov\u00E1, Bardejov", content: "Hellstav som si vybrala prv\u00FD kr\u00E1t pri prer\u00E1ban\u00ED svojho bytu. Rekon\u0161trukcia prebehla nad moje o\u010Dak\u00E1vania aj v\u010Faka u\u017Eito\u010Dn\u00FDm rad\u00E1m.", imageSrc: customer3_png_1.default }))));
exports.default = Testimonials;
