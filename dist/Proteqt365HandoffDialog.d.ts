import React from 'react';
import { Proteqt365CodeChip } from './Proteqt365CodeChip.js';
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
export declare const Proteqt365HandoffDialog: React.FC<Proteqt365HandoffDialogProps>;
