# @proslotbosllc/proteqt365-kit

The Proteqt365 partner row for a ProSlot athlete card, and the handoff dialog
it opens. One package so the facility sites and ProSlot Player Network render
the same thing and the wording cannot drift.

Attribution is a code the family types at Proteqt's checkout; there is no
link. The row shows the mark, a label, Proteqt's blurb and a button. The dialog
is the only place that shows the code and the referral-fee disclosure, and its
Continue goes to proteqt365.com unless Proteqt has issued an entry point.

```tsx
const [open, setOpen] = useState(false);
<Proteqt365Row facilityName="HomeTeam Facility" onOpen={() => setOpen(true)} label="Pro-Level Athlete Support" description="…" />
<Proteqt365HandoffDialog open={open} onClose={() => setOpen(false)} facilityName="HomeTeam Facility" code="HOMETEAM" />
```

Every class name is a prop; the defaults are neutral and read on light or dark.
