# Startup / Product Metrics

> Define metrics that show useful product activity. Metrics should not be random numbers. Each metric should help the team understand usage, value, status, validation, or operational performance.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Assignment Records | Usage | Shows whether students and admins are actively creating trackable tasks | Count all records in system | PrototypeRecords table / localStorage | Dashboard |
| M-02 | Pending Assignments | Status | Shows unsubmitted or unverified academic workload | Count records with status = Pending | PrototypeRecords table | Dashboard |
| M-03 | Completed / Graded Tasks | Status | Shows successfully finished assignments and projects | Count records with status = Graded or Submitted | PrototypeRecords table | Dashboard |
| M-04 | Most Common Category | Category | Identifies course subject areas with the highest assignment load | Count records grouped by category and find max | PrototypeRecords table | Dashboard |
| M-05 | Search Activity Volume | Usage | Shows user reliance on finding specific assignments and filters | Count total SearchRecord events | ActivityLog table | Dashboard / Analytics |
| M-06 | Admin Status Updates | Operational | Verifies that instructors or admins are actively tracking student submissions | Count total UpdateStatus events | ActivityLog table | Admin Panel |

## 2. Metrics Interpretation

The product metrics collected during Sprint 2 demonstrate consistent student engagement with the Campus Life Hub platform. M-01 (Total Assignment Records) confirms that users are maintaining an active inventory of course deliverables. The presence of M-02 (Pending Cases) indicates active task flow, while M-03 (Completed/Graded Tasks) proves that users successfully track deliverables through to final completion. M-04 reveals that ICT / Programming represents the dominant course workload category. Furthermore, high event counts in M-05 (Search Activity Volume) prove that users heavily rely on realtime search and category filtering to navigate their assignments. To improve operational efficiency, the team will focus on streamlining the M-06 (Admin Status Updates) workflow to reduce response time between task submission and final grading.

## 3. Link to Final Prototype

These metrics are directly displayed on the Prototype Dashboard (`index.html#dashboard`) as interactive KPI summary cards and visual charts. The metric values are calculated dynamically using client-side JavaScript from localStorage data and are mirrored in the Power BI Startup Metrics report (`/screenshots/lab11-powerbi-dashboard.png`).
