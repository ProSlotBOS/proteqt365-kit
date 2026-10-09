import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink } from 'lucide-react';
import { Proteqt365Mark } from './Proteqt365Mark.js';
import { proteqtCopy } from './copy.js';
export const Proteqt365Row = ({ facilityName, onOpen, label, description, className = 'flex flex-col gap-2 border-t border-black/10 pt-3', labelClassName = 'text-[11px] font-bold uppercase tracking-widest opacity-70', descriptionClassName = 'mt-1 text-[11px] leading-relaxed opacity-60', markClassName = 'mt-0.5 h-6 w-auto shrink-0 opacity-70', buttonClassName = 'self-start sm:self-end shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#F26524] px-3 py-2 text-[11px] font-black uppercase tracking-wider text-white hover:opacity-90', }) => {
    const t = proteqtCopy(facilityName);
    return (_jsxs("div", { className: className, "data-proteqt365-row": true, children: [_jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [_jsx(Proteqt365Mark, { className: markClassName }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: labelClassName, children: label || t.label }), description ? _jsx("p", { className: descriptionClassName, children: description }) : null] })] }), _jsxs("button", { type: "button", onClick: (e) => { e.stopPropagation(); onOpen(); }, className: buttonClassName, children: [t.button, " ", _jsx(ExternalLink, { size: 12 })] })] }));
};
