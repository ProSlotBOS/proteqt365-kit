import React from 'react';
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
export declare const Proteqt365CodeChip: React.FC<Proteqt365CodeChipProps>;
