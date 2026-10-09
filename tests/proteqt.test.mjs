/**
 * The row and the dialog go on other businesses' sites. What must hold: the
 * code is never on the card itself, the dialog carries the code and the
 * referral disclosure, and Continue leaves for Proteqt.
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Proteqt365Row, Proteqt365HandoffDialog, proteqtCopy, PROTEQT_SITE_URL } from '../dist/index.js';

const r = (el) => renderToStaticMarkup(el);

describe('row', () => {
  test('shows the mark, label and blurb, and a button, but never the code', () => {
    const html = r(React.createElement(Proteqt365Row, { facilityName: 'HomeTeam Facility', onOpen: () => {}, label: 'Pro-Level Athlete Support', description: 'Offered to HomeTeam families through Proteqt365.' }));
    assert.match(html, /Pro-Level Athlete Support/);
    assert.match(html, /Offered to HomeTeam families/);
    assert.match(html, /Go to Proteqt365/);
    assert.match(html, /<svg/);
    assert.doesNotMatch(html, /HOMETEAM|Code/);
  });
});

describe('dialog', () => {
  test('says the parent is leaving, shows the code, discloses the fee, and continues to Proteqt', () => {
    const html = r(React.createElement(Proteqt365HandoffDialog, { open: true, onClose: () => {}, facilityName: 'ProSlot Player Network', code: 'PROSLOT' }));
    assert.match(html, /You(&#x27;|')re leaving ProSlot Player Network for Proteqt365/);
    assert.match(html, /Enter this code at Proteqt(&#x27;|')s checkout so ProSlot Player Network is credited/);
    assert.match(html, />PROSLOT</);
    assert.match(html, /ProSlot Player Network may receive a referral fee if you enroll/);
    assert.match(html, new RegExp(`href="${PROTEQT_SITE_URL}"`));
    assert.match(html, /rel="noopener noreferrer"/);
  });
  test('renders nothing when closed', () => {
    assert.equal(r(React.createElement(Proteqt365HandoffDialog, { open: false, onClose: () => {}, facilityName: 'X', code: 'Y' })), '');
  });
  test('an issued entry point replaces the site link', () => {
    const html = r(React.createElement(Proteqt365HandoffDialog, { open: true, onClose: () => {}, facilityName: 'X', code: 'Y', href: 'https://proteqt365.com/x?ref=Y' }));
    assert.match(html, /href="https:\/\/proteqt365\.com\/x\?ref=Y"/);
  });
});

describe('copy', () => {
  test('names the facility in every sentence that needs it', () => {
    const t = proteqtCopy('Kingdom Method');
    for (const k of ['leavingTitle', 'leavingBody', 'codeInstruction', 'disclosure']) assert.match(t[k], /Kingdom Method/);
  });
});
