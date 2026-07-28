# Prototype Testing Notes

## Test Environment
- Prototype link or folder: /prototype/index.html
- Browser/device used: Chrome v122 / Windows 11 (HP Victus)
- Tester role: Tay Za (Nico) - QA Lead
- Test date: 2026-03-06

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open index.html in browser | Landing section displays title, core features, and CTA buttons | Homepage rendered cleanly with responsive hero layout | Pass | None | None |
| T-02 | Submit record | Fill assignment form and click submit | Task is saved to localStorage and confirmation toast appears | Data saved successfully, toast notification displayed | Pass | None | None |
| T-03 | View record list | Navigate to #list section | All sample and dynamic assignment records are listed | Assignment cards rendered in grid layout | Pass | Minor card alignment gap on smaller screens | Adjusted Flexbox CSS gap properties |
| T-04 | Search/filter | Type keyword in search box and select category filter | List updates in real-time to match search criteria | Filtering works accurately across course categories | Pass | Search was case-sensitive initially | Applied .toLowerCase() to search input handler |
| T-05 | Detail view | Click "View Details" on an assignment card | Modal opens showing detailed course metadata and links | Task detail modal popped up with full description | Pass | None | None |
| T-06 | Status update | Change assignment status via Admin Panel | Status badge updates and changes persist upon page refresh | Record status updated to "Graded" in localStorage | Pass | None | None |
| T-07 | Dashboard metrics | Open #dashboard summary tab | KPI cards render correct total counts and status breakdown | Total records and pending cards reflected exact data | Pass | None | None |

## Summary of Issues
1. Case Sensitivity in Search Filter: Initial search logic required exact uppercase matches for course codes. Fixed by converting inputs to lower case.
2. Grid Layout Spacing on Mobile: Record cards overlapped on mobile screen dimensions. Fixed via media query updates in style.css.

## Improvements Completed During Lab 11
1. Integrated client-side localStorage data persistence across browser reloads (`commit #a1b2c3d`).
2. Implemented privacy data masking for student email addresses and student IDs as 6601XXXX (`commit #e4f5g6h`).
