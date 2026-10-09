import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Proteqt365CodeChip } from './Proteqt365CodeChip.js';
import { Proteqt365Mark } from './Proteqt365Mark.js';
import { proteqtCopy, PROTEQT_SITE_URL } from './copy.js';

/**
 * Confirms the handoff to Proteqt365 before the parent leaves the site.
 *
 * Three things have to be said before someone crosses over, and an external
 * link icon says none of them: that Proteqt is a different company, that the
 * money and the guidance are theirs and not the facility's, and that the
 * facility is paid when an enrolment happens. That last one is a material
 * connection, and disclosing it is not optional politeness. This is also the
 * one place the code is shown: the last screen before they leave and the
 * moment Proteqt's checkout asks for it.
 */
export interface Proteqt365HandoffDialogProps {
  open: boolean;
  onClose: () => void;
  facilityName: string;
  code: string;
  /** Where Continue goes; Proteqt's site unless Proteqt issued an entry point. */
  href?: string;
  /** Host tokens. Defaults are neutral and read on light or dark. */
  panelClassName?: string;
  textClassName?: string;
  mutedClassName?: string;
  borderClassName?: string;
  surfaceClassName?: string;
  chipProps?: Partial<React.ComponentProps<typeof Proteqt365CodeChip>>;
}

export const Proteqt365HandoffDialog: React.FC<Proteqt365HandoffDialogProps> = ({
  open,
  onClose,
  facilityName,
  code,
  href = PROTEQT_SITE_URL,
  panelClassName = 'bg-white text-slate-900',
  textClassName = '',
  mutedClassName = 'opacity-70',
  borderClassName = 'border-black/10',
  surfaceClassName = 'bg-black/5',
  chipProps,
}) => {
  if (!open) return null;
  const t = proteqtCopy(facilityName);
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="proteqt-handoff-title"
        className={`relative w-full max-w-sm max-h-[85vh] overflow-y-auto rounded-xl border p-5 shadow-2xl ${borderClassName} ${panelClassName}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full ${surfaceClassName} ${mutedClassName} hover:opacity-100`}
        >
          <X size={15} />
        </button>
        <Proteqt365Mark className={`h-9 w-auto ${textClassName}`} />
        <h2 id="proteqt-handoff-title" className={`mt-4 text-sm font-black uppercase tracking-widest ${textClassName}`}>
          {t.leavingTitle}
        </h2>
        <p className={`mt-2 text-xs leading-relaxed ${mutedClassName}`}>{t.leavingBody}</p>
        {code && (
          <div className={`mt-4 rounded-lg border p-3 ${borderClassName} ${surfaceClassName}`}>
            <p className={`text-[11px] leading-relaxed ${mutedClassName}`}>{t.codeInstruction}</p>
            <Proteqt365CodeChip code={code} className="mt-2 w-full" {...chipProps} />
          </div>
        )}
        <p className={`mt-3 border-t pt-3 text-[11px] leading-relaxed ${borderClassName} ${mutedClassName}`}>{t.disclosure}</p>
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className={`flex-1 rounded-lg border py-2.5 text-[11px] font-black uppercase tracking-wider ${borderClassName} ${mutedClassName} hover:opacity-100`}
          >
            {t.cancelLabel}
          </button>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#F26524] py-2.5 text-[11px] font-black uppercase tracking-wider text-white hover:opacity-90"
          >
            {t.continueLabel} <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
