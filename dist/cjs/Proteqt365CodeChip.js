"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proteqt365CodeChip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
const Proteqt365CodeChip = ({ code, className = '', surfaceClassName = 'border border-black/15 bg-black/5 hover:bg-black/10', codeClassName = 'font-mono text-sm font-bold tracking-widest select-all', labelClassName = 'text-[9px] font-black uppercase tracking-widest opacity-60', }) => {
    const [copied, setCopied] = (0, react_1.useState)(false);
    const [selectOnly, setSelectOnly] = (0, react_1.useState)(false);
    const codeRef = (0, react_1.useRef)(null);
    const timer = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => () => { if (timer.current)
        clearTimeout(timer.current); }, []);
    if (!code)
        return null;
    const selectTheCode = () => {
        const node = codeRef.current;
        if (!node || typeof window === 'undefined')
            return;
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        setSelectOnly(true);
    };
    const copy = async () => {
        try {
            if (!navigator.clipboard?.writeText)
                throw new Error('no clipboard');
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setSelectOnly(false);
            if (timer.current)
                clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2000);
        }
        catch {
            selectTheCode();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("button", { type: "button", onClick: (e) => { e.stopPropagation(); copy(); }, className: `group flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${surfaceClassName} ${className}`, "aria-label": copied ? `Referral code ${code} copied` : `Copy referral code ${code}`, children: [(0, jsx_runtime_1.jsx)("span", { className: `shrink-0 ${labelClassName}`, children: "Code" }), (0, jsx_runtime_1.jsx)("span", { ref: codeRef, className: codeClassName, children: code }), copied
                ? (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { size: 14, className: "ml-auto shrink-0 text-emerald-500", "aria-hidden": true })
                : (0, jsx_runtime_1.jsx)(lucide_react_1.Copy, { size: 14, className: "ml-auto shrink-0 opacity-60 group-hover:opacity-100", "aria-hidden": true }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", role: "status", "aria-live": "polite", children: copied ? 'Copied' : selectOnly ? 'Code selected — hold to copy' : '' })] }));
};
exports.Proteqt365CodeChip = Proteqt365CodeChip;
