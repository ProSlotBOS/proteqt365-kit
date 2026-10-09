"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proteqtCopy = exports.PROTEQT_SITE_URL = void 0;
/** Proteqt365's public site: where Continue goes when Proteqt has issued no entry point. */
exports.PROTEQT_SITE_URL = 'https://proteqt365.com/';
/**
 * The words, apart from React so they can be tested and cannot drift between
 * the row, the dialog and whatever else shows them.
 *
 * Attribution is a code the parent types at Proteqt's own checkout, not a
 * link (Proteqt, 13 Sep 2026; Joe, 9 Oct 2026). The row shows no code: the
 * dialog is the one place that says the parent is leaving, shows the code,
 * and discloses the referral fee (Joe, 9 Oct 2026).
 */
const proteqtCopy = (facilityName) => ({
    /** Default label; a facility may carry Proteqt's own wording instead. */
    label: 'Athlete Support',
    leavingTitle: `You're leaving ${facilityName} for Proteqt365`,
    leavingBody: `Proteqt365 is a separate company. Membership, payment and the guidance itself are handled entirely by them — ${facilityName} never sees your card details or your athlete's requests.`,
    codeInstruction: `Enter this code at Proteqt's checkout so ${facilityName} is credited.`,
    disclosure: `${facilityName} may receive a referral fee if you enroll.`,
    button: 'Go to Proteqt365',
    continueLabel: 'Continue',
    cancelLabel: 'Cancel',
});
exports.proteqtCopy = proteqtCopy;
