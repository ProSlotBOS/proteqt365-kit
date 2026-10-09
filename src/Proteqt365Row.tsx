import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Proteqt365Mark } from './Proteqt365Mark.js';
import { proteqtCopy } from './copy.js';

/**
 * The Proteqt365 row on an athlete card: the partner's mark, a label and
 * Proteqt's blurb, and one button. No code here — the button opens the
 * handoff dialog, which is where the code and the disclosure live. The host
 * owns the dialog's open state so one dialog can serve every card on a page.
 */
export interface Proteqt365RowProps {
  facilityName: string;
  onOpen: () => void;
  /** Proteqt's wording for this facility, if they supplied it. */
  label?: string;
  description?: string;
  className?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  markClassName?: string;
  /** The button; defaults to Proteqt's orange, sized like a card's other buttons. */
  buttonClassName?: string;
}

export const Proteqt365Row: React.FC<Proteqt365RowProps> = ({
  facilityName,
  onOpen,
  label,
  description,
  className = 'flex flex-col gap-2 border-t border-black/10 pt-3',
  labelClassName = 'text-[11px] font-bold uppercase tracking-widest opacity-70',
  descriptionClassName = 'mt-1 text-[11px] leading-relaxed opacity-60',
  markClassName = 'mt-0.5 h-6 w-auto shrink-0 opacity-70',
  buttonClassName = 'self-start sm:self-end shrink-0 inline-flex items-center gap-2 rounded-lg bg-[#F26524] px-3 py-2 text-[11px] font-black uppercase tracking-wider text-white hover:opacity-90',
}) => {
  const t = proteqtCopy(facilityName);
  return (
    <div className={className} data-proteqt365-row>
      <div className="flex min-w-0 items-start gap-3">
        <Proteqt365Mark className={markClassName} />
        <div className="min-w-0">
          <p className={labelClassName}>{label || t.label}</p>
          {description ? <p className={descriptionClassName}>{description}</p> : null}
        </div>
      </div>
      <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(); }} className={buttonClassName}>
        {t.button} <ExternalLink size={12} />
      </button>
    </div>
  );
};
