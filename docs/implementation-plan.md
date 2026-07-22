# Lab 10 - Implementation Plan

## 1. Project Information
- Group name: Group 3 (STT)
- Project title: Campus Life Hub - Assignment & Project Tracker
- Repository link: https://github.com/tayzaa68-Ric/ICT105-STT-MVP
- Selected platform/tools: Frontend-only Web Application (HTML5, CSS3, JavaScript ES6)
- Backend status: Simulated backend (using Client-side LocalStorage and JSON/CSV Datasets)

## 2. Prototype Scope for Sprint 1
List the features your group will implement in Lab 10.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen | FR-01 | US-01 | Homepage | In Progress |
| Input/submission form | FR-03 | US-02 | Form | In Progress |
| Record list | FR-05 | US-03 | List | In Progress |
| Search/filter | FR-06 | US-04 | List/Search | In Progress |
| Detail view | FR-07 | US-05 | Detail | In Progress |
| Status tracking | FR-08 | US-06 | Detail/Admin | In Progress |
| Admin function | FR-09 | US-07 | Admin | In Progress |
| Dashboard/summary | FR-12 | US-08 | Dashboard | In Progress |

## 3. Implementation Approach
Explain how your prototype will be built.

- Frontend: Built using standard HTML5 semantic elements for structure, CSS3 Flexbox/Grid for responsive styling, and vanilla JavaScript (ES6+) for interactive components and DOM manipulation.
- Data source/storage: Simulated data layer using client-side localStorage paired with sample seed datasets (`assignment-sample-records.csv` / JSON) to simulate dynamic record fetching and creation.
- Admin/status handling: Simulated role-based interface allowing status transitions (e.g., Pending -> Submitted -> Graded / Overdue) with owner-bound contextual state updates.
- Search/filter approach: Real-time client-side array filtering driven by user input triggers (filtering by category, assignment status, and course keywords).
- Validation approach: Combined HTML5 form attributes (`required`, type="url", min`/`max dates) and custom JavaScript functions to enforce strict client-side validation before submission.
- Screenshots/evidence approach: High-resolution full-screen page captures stored in /screenshots/ (`homepage.png`, input-form.png, record-list.png, detail-view.png, `admin-view.png`) and linked within documentation.

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Tay Za (Nico) | Team Leader, Sprint documentation (`implementation-plan.md`, `feature-implementation-status.md`), script plan, and requirement traceability. | Commit / GitHub Issue #1 / File updates |
| Thant Sithu Soe | Prototype directory setup (`/prototype/`), HTML/CSS layout structure, core screens UI, and README.md updates. | Commit / GitHub Issue #2 / README / Screenshots |
| Sutt | JavaScript data simulation (`script.js`), SPA interaction logic, search/filter implementation, and Admin status management features. | Commit / GitHub Issue #3 / Script logic |

## 5. Risks or Blockers
Write technical problems your team faced and how you plan to solve them.

1. Data Persistence across Page Refreshes:
   - Problem: Without a real database, dynamic form submissions reset upon page reload.
   - Solution: Implemented JavaScript localStorage to retain newly added assignment entries and status changes seamlessly across sessions.

2. CSV Table Formatting Alignment in GitHub:
   - Problem: Inconsistent comma counts across rows in custom CSV documentation led to rendering warnings in GitHub's table viewer.
   - Solution: Standardized column structure across all CSV data rows and enforced strict quote-escaping for multi-comma text fields.

3. Privacy & Sensitive Information Exposure:
   - Problem: Public view pages originally rendered unmasked student IDs and contact emails.
   - Solution: Applied a utility masking function (`6601XXXX`) for public record rendering to comply with Lab 09 responsible design guidelines.
