import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
export const Proteqt365CodeChip = ({ code, className = '', surfaceClassName = 'border border-black/15 bg-black/5 hover:bg-black/10', codeClassName = 'font-mono text-sm font-bold tracking-widest select-all', labelClassName = 'text-[9px] font-black uppercase tracking-widest opacity-60', }) => {
    const [copied, setCopied] = useState(false);
    const [selectOnly, setSelectOnly] = useState(false);
    const codeRef = useRef(null);
    const timer = useRef(null);
    useEffect(() => () => { if (timer.current)
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
    return (_jsxs("button", { type: "button", onClick: (e) => { e.stopPropagation(); copy(); }, className: `group flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${surfaceClassName} ${className}`, "aria-label": copied ? `Referral code ${code} copied` : `Copy referral code ${code}`, children: [_jsx("span", { className: `shrink-0 ${labelClassName}`, children: "Code" }), _jsx("span", { ref: codeRef, className: codeClassName, children: code }), copied
                ? _jsx(Check, { size: 14, className: "ml-auto shrink-0 text-emerald-500", "aria-hidden": true })
                : _jsx(Copy, { size: 14, className: "ml-auto shrink-0 opacity-60 group-hover:opacity-100", "aria-hidden": true }), _jsx("span", { className: "sr-only", role: "status", "aria-live": "polite", children: copied ? 'Copied' : selectOnly ? 'Code selected — hold to copy' : '' })] }));
};
