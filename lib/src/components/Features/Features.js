"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FeatureItem_1 = __importDefault(require("./FeatureItem"));
const Features = () => (react_1.default.createElement("section", { className: "text-gray-600 body-font" },
    react_1.default.createElement("div", { className: "container px-5 pt-24 mx-auto" },
        react_1.default.createElement("div", { className: "flex flex-wrap w-full mb-10 flex-col items-center text-center" },
            react_1.default.createElement("h1", { className: "sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" }, "O n\u00E1s"),
            react_1.default.createElement("p", { className: "lg:w-1/2 w-full leading-relaxed text-gray-500" }, "Spolo\u010Dnos\u0165 Hellstav, s.r.o. bola zalo\u017Een\u00E1 16. m\u00E1ja 2020. Od za\u010Diatku svojho vzniku sa venuje mur\u00E1rskym pr\u00E1cam a stavebnej \u010Dinnosti \u010Di u\u017E v exteri\u00E9ri, alebo interi\u00E9ri. Pon\u00FAka v\u0161ak nie len to. S vyu\u017Eit\u00EDm kvalitn\u00FDch materi\u00E1lov V\u00E1m poskytne slu\u017Eby ktor\u00E9 bud\u00FA nie len estetick\u00E9, ale aj odoln\u00E9 vo\u010Di zubu \u010Dasu.")),
        react_1.default.createElement("div", { className: "flex flex-wrap -m-4" },
            react_1.default.createElement(FeatureItem_1.default, { title: "Kvalita", content: "V\u00FDber kvalitn\u00FDch stavebn\u00FDch materi\u00E1lov je jedn\u00FDm z hlavn\u00FDch pilierov \u00FAspe\u0161n\u00E9ho projektu. Pom\u00F4\u017Eeme V\u00E1m!", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" }))) }),
            react_1.default.createElement(FeatureItem_1.default, { title: "Zodpovednos\u0165", content: "Ku ka\u017Edej po\u017Eiadavke na\u0161ich z\u00E1kazn\u00EDkov pristupujeme s najvy\u0161\u0161ou mierou zodpovednosti.", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
                    " ") }),
            react_1.default.createElement(FeatureItem_1.default, { title: "Kreativita", content: "Ak si nie ste ist\u00ED so svojim vlastn\u00FDm pl\u00E1novan\u00EDm, pon\u00FAkneme V\u00E1m kreat\u00EDvne rie\u0161enia a rady. ", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" })),
                    " ") }),
            react_1.default.createElement(FeatureItem_1.default, { title: "R\u00FDchlos\u0165", content: "Ka\u017Ed\u00FD z projektov sa pok\u00FA\u0161ame dokon\u010Di\u0165 \u010Do najr\u00FDchlej\u0161ie. Samozrejme bez \u00FAhonu na kvalite.", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" })),
                    " ") }),
            react_1.default.createElement(FeatureItem_1.default, { title: "Sk\u00FAsenosti", content: "Na\u0161e dlhoro\u010Dn\u00E9 sk\u00FAsenosti z oblasti stavebn\u00EDctva vyu\u017Eijeme aj pri realiz\u00E1cii Va\u0161ich pl\u00E1nov.", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" })),
                    " ") }),
            react_1.default.createElement(FeatureItem_1.default, { title: "Odbornos\u0165", content: "Dlhodob\u00E1 pr\u00E1ca v na\u0161om odbore bola pevn\u00FDm z\u00E1kladom mnoh\u00FDch na\u0161ich u\u017E ukon\u010Den\u00FDch \u00FAspe\u0161n\u00FDch projektov.", icon: react_1.default.createElement("svg", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "w-6 h-6", viewBox: "0 0 24 24" },
                    react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        react_1.default.createElement("path", { d: "M12 14l9-5-9-5-9 5 9 5z" }),
                        react_1.default.createElement("path", { d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" }),
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" })),
                    " ") })))));
exports.default = Features;
