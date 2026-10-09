import React from 'react';
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
export declare const Proteqt365Row: React.FC<Proteqt365RowProps>;
