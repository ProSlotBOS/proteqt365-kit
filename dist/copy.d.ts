/** Proteqt365's public site: where Continue goes when Proteqt has issued no entry point. */
export declare const PROTEQT_SITE_URL = "https://proteqt365.com/";
/**
 * The words, apart from React so they can be tested and cannot drift between
 * the row, the dialog and whatever else shows them.
 *
 * Attribution is a code the parent types at Proteqt's own checkout, not a
 * link (Proteqt, 13 Sep 2026; Joe, 9 Oct 2026). The row shows no code: the
 * dialog is the one place that says the parent is leaving, shows the code,
 * and discloses the referral fee (Joe, 9 Oct 2026).
 */
export declare const proteqtCopy: (facilityName: string) => {
    /** Default label; a facility may carry Proteqt's own wording instead. */
    label: string;
    leavingTitle: string;
    leavingBody: string;
    codeInstruction: string;
    disclosure: string;
    button: string;
    continueLabel: string;
    cancelLabel: string;
};
