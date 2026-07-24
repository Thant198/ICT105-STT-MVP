# Lab 10 - Feature Implementation Status

## Purpose
Use this file to prove that your prototype implementation is connected to system-requirements.md.

| Req ID | Required Functionality | Prototype Screen/Module | Current Status | Evidence | Next Fix Needed |
|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | Landing Section (`index.html#home`) | Working Draft | /screenshots/homepage.png | Refine call-to-action buttons |
| FR-02 | Primary user pathway | Task Submission & Search Workflow | Working Draft | /prototype/index.html | Connect status page flow |
| FR-03 | User input or data submission | Assignment Form (`index.html#form`) | Working Draft | /screenshots/input-form.png | Add file attachment simulation |
| FR-04 | Data storage or simulated storage | localStorage & Seed CSV/JSON Data | Working Draft | /prototype/script.js | Improve persistence sync |
| FR-05 | View records or information list | Assignment List (`index.html#list`) | Working Draft | /screenshots/record-list.png | Optimize grid responsiveness |
| FR-06 | Search, filter, or category function | Search Bar & Category Filter | Working Draft | /prototype/script.js | Add multi-category selection |
| FR-07 | Detail view for each record | Task Detail Modal (`index.html#detail`) | Working Draft | /screenshots/detail-view.png | Add submission history view |
| FR-08 | Status or progress tracking | Progress Bar & Status Badges | Working Draft | /prototype/script.js | Enhance visual status indicators |
| FR-09 | Admin or manager function | Admin Status Control Panel | Working Draft | /screenshots/admin-view.png | Restrict admin access flags |
| FR-10 | Validation and error prevention | Form Input JavaScript Validator | Working Draft | /prototype/script.js | Add custom URL regex check |
| FR-11 | Confirmation or feedback message | Toast Notification Component | Working Draft | /prototype/script.js | Auto-dismiss toast timer |
| FR-12 | Dashboard or summary view | Analytics Summary Cards | Working Draft | /prototype/index.html | Add completion percentage chart |
| FR-13 | UI consistency | CSS Variables & Shared Layout (`style.css`)| Working Draft | /prototype/style.css | Audit typography scale |
| FR-14 | Mobile-friendly/responsive design | Media Queries & Responsive Grid | In Progress | /prototype/style.css | Adjust navbar for mobile menu |
| FR-15 | Privacy and responsible data handling | Data Masking Utility (`6601XXXX`) | Working Draft | /prototype/script.js | Mask email handles in public view |
| FR-16 | Final prototype traceability | Traceability Matrix Documentation | Working Draft | /docs/feature-implementation-status.md | Keep updated across Sprint 2 |

## Summary
- Features working today: FR-01, FR-03, FR-04, FR-05, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12, FR-13, FR-15, FR-16
- Features partially working: FR-02, FR-14
- Features not yet started: None (All core Sprint 1 requirements initiated)
- Features requiring instructor feedback: FR-09 (Simulated Admin role authorization) & FR-15 (Data masking strictness)
 # Feature Implementation Status

> Update this file during Lab 11. Every prototype feature must connect to system-requirements.md.

| Req ID | Required Functionality | Screen/Module | Lab 10 Status | Lab 11 Status | Owner | Evidence Screenshot/Commit | Notes/Next Action |
|---|---|---|---|---|---|---|---|
| FR-01 | Homepage or landing screen | Homepage | Partially Completed | Completed | Thant Sithu Soe | /screenshots/homepage.png | Hero banner and CTAs polished |
| FR-02 | Primary user pathway | User Flow | Partially Completed | Completed | Thant Sithu Soe | /prototype/index.html | Full submission-to-dashboard path active |
| FR-03 | User input/submission | Input Form | Partially Completed | Completed | Thant Sithu Soe | /screenshots/input-form.png | Form UI and fields structured |
| FR-04 | Data storage/record management | Data Layer | Partially Completed | Completed | Sutt | /prototype/script.js | localStorage persistence integrated |
| FR-05 | View records/list | Record List | Partially Completed | Completed | Thant Sithu Soe | /screenshots/record-list.png | Responsive grid UI deployed |
| FR-06 | Search/filter/category | Search/Filter | Pending | Completed | Sutt | /prototype/script.js | Case-insensitive realtime search active |
| FR-07 | Detail view | Detail Page/Section | Pending | Completed | Thant Sithu Soe | /screenshots/detail-view.png | Task modal pop-up UI implemented |
| FR-08 | Status/progress tracking | Status Module | Pending | Completed | Sutt | /prototype/script.js | Dynamic status badges & state sync |
| FR-09 | Admin/manager function | Admin View | Pending | Completed | Sutt | /screenshots/admin-view.png | Role-based status control panel logic |
| FR-10 | Validation/error prevention | Forms | Pending | Completed | Sutt | /prototype/script.js | Required fields & URL regex checks |
| FR-11 | Confirmation/feedback message | Submission Flow | Pending | Completed | Sutt | /prototype/script.js | Toast notification trigger added |
| FR-12 | Dashboard/analytics view | Dashboard | Pending | Completed | Tay Za (Nico) | /screenshots/dashboard.png | KPI cards and Power BI analytics |
| FR-13 | UI consistency | All Screens | Partially Completed | Completed | Thant Sithu Soe | /prototype/style.css | Uniform design system & CSS variables |
| FR-14 | Mobile/responsive consideration | All Screens | Pending | Completed | Thant Sithu Soe | /prototype/style.css | Responsive breakpoints verified |
| FR-15 | Privacy/responsible data handling | Data Collection | Pending | Completed | Tay Za (Nico) | /prototype/script.js | Masking student IDs as 6601XXXX |
| FR-16 | Final prototype traceability | Documentation | Pending | Completed | Tay Za (Nico) | /docs/ files | All requirements mapped & verified |
