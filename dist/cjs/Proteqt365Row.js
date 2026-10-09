"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proteqt365Row = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const Proteqt365Mark_js_1 = require("./Proteqt365Mark.js");
const copy_js_1 = require("./copy.js");
const Proteqt365Row = ({ facilityName, onOpen, label, description, className = 'flex flex-col gap-2 border-t border-black/10 pt-3', labelClassName = 'text-[11px] font-bold uppercase tracking-widest opacity-70', descriptionClassName = 'mt-1 text-[11px] leading-relaxed opacity-60', markClassName = 'mt-0.5 h-6 w-auto shrink-0 opacity-70', buttonClassName = 'self-start sm:self-end shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#F26524] px-3 py-2 text-[11px] font-black uppercase tracking-wider text-white hover:opacity-90', }) => {
    const t = (0, copy_js_1.proteqtCopy)(facilityName);
    return ((0, jsx_runtime_1.jsxs)("div", { className: className, "data-proteqt365-row": true, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex min-w-0 items-start gap-3", children: [(0, jsx_runtime_1.jsx)(Proteqt365Mark_js_1.Proteqt365Mark, { className: markClassName }), (0, jsx_runtime_1.jsxs)("div", { className: "min-w-0", children: [(0, jsx_runtime_1.jsx)("p", { className: labelClassName, children: label || t.label }), description ? (0, jsx_runtime_1.jsx)("p", { className: descriptionClassName, children: description }) : null] })] }), (0, jsx_runtime_1.jsxs)("button", { type: "button", onClick: (e) => { e.stopPropagation(); onOpen(); }, className: buttonClassName, children: [t.button, " ", (0, jsx_runtime_1.jsx)(lucide_react_1.ExternalLink, { size: 12 })] })] }));
};
exports.Proteqt365Row = Proteqt365Row;
