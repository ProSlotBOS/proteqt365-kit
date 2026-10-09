import React, { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

/**
 * The facility's Proteqt365 code, made easy to take with you.
 *
 * A parent who loses the code between here and Proteqt's checkout is a
 * referral the facility never gets paid for, so it is copyable in one tap.
 * Where the clipboard is unavailable the code is selected instead, so "copy"
 * is always a long-press away rather than the control silently doing nothing.
 */
export interface Proteqt365CodeChipProps {
  code: string;
  className?: string;
  /** Host tokens for the chip surface; defaults read on light or dark. */
  surfaceClassName?: string;
  codeClassName?: string;
  labelClassName?: string;
}

export const Proteqt365CodeChip: React.FC<Proteqt365CodeChipProps> = ({
  code,
  className = '',
  surfaceClassName = 'border border-black/15 bg-black/5 hover:bg-black/10',
  codeClassName = 'font-mono text-sm font-bold tracking-widest select-all',
  labelClassName = 'text-[9px] font-black uppercase tracking-widest opacity-60',
}) => {
  const [copied, setCopied] = useState(false);
  const [selectOnly, setSelectOnly] = useState(false);
  const codeRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  if (!code) return null;

  const selectTheCode = () => {
    const node = codeRef.current;
    if (!node || typeof window === 'undefined') return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
    setSelectOnly(true);
  };
  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('no clipboard');
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setSelectOnly(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      selectTheCode();
    }
  };

  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); copy(); }}
      className={`group flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors ${surfaceClassName} ${className}`}
      aria-label={copied ? `Referral code ${code} copied` : `Copy referral code ${code}`}
    >
      <span className={`shrink-0 ${labelClassName}`}>Code</span>
      <span ref={codeRef} className={codeClassName}>{code}</span>
      {copied
        ? <Check size={14} className="ml-auto shrink-0 text-emerald-500" aria-hidden />
        : <Copy size={14} className="ml-auto shrink-0 opacity-60 group-hover:opacity-100" aria-hidden />}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'Copied' : selectOnly ? 'Code selected — hold to copy' : ''}
      </span>
    </button>
  );
};
