# Analytics Insights Report

**Project:** Campus Life – Student Project Management System (MVP)  
**Course:** ICT105 – Fundamental Technology Entrepreneurship  
**Team:** STT  
**Document:** analytics-insights.md  
**Version:** 1.0

---

# Purpose

This document explains how usability testing metrics are interpreted and how user confusion points are mapped to affected system requirements. The report provides evidence-based recommendations for improving the usability and overall quality of the Campus Life MVP.

---

# Objectives

- Measure user success while completing core tasks.
- Evaluate the efficiency of the user interface.
- Measure feature usefulness.
- Identify confusion points during usability testing.
- Map confusion points to affected requirements.
- Prioritize future improvements.

---

# Evaluation Metrics

## 1. Task Completion Rate

### Description

Measures the percentage of participants who complete a task successfully without assistance.

### Formula

```text
Task Completion Rate =
(Number of Successful Participants ÷ Total Participants) × 100
```

### Success Target

**≥ 70%**

| Result | Interpretation |
|---------|----------------|
| 90–100% | Excellent usability |
| 70–89% | Acceptable usability |
| Below 70% | Improvement required |

---

## 2. Average Task Completion Time

### Description

Measures how long participants need to complete a task.

### Formula

```text
Average Completion Time =
Total Completion Time ÷ Number of Participants
```

### Success Target

**≤ 2 minutes**

| Time | Interpretation |
|------|----------------|
| Under 2 minutes | Efficient |
| 2–3 minutes | Acceptable |
| Above 3 minutes | Workflow requires improvement |

---

## 3. Assignment Tracker Usefulness

Participants rate the Assignment Tracker using a **1–5 Likert Scale**.

| Rating | Meaning |
|---------|---------|
| 5 | Very Useful |
| 4 | Useful |
| 3 | Neutral |
| 2 | Slightly Useful |
| 1 | Not Useful |

**Success Target**

Average Rating **≥ 4.0 / 5**

---

## 4. Pinned Links Dashboard Usefulness

Participants evaluate the usefulness of the Pinned Links Dashboard.

**Success Target**

Average Rating **≥ 4.0 / 5**

---

## 5. Ease of Use

Measures how easy participants find the interface.

**Success Target**

Average Rating **≥ 4.0 / 5**

---

## 6. Navigation Rating

Measures how easily users locate important features.

**Success Target**

Average Rating **≥ 4.0 / 5**

---

## 7. Screen Layout Rating

Measures readability, spacing, organization, and visual hierarchy.

**Success Target**

Average Rating **≥ 4.0 / 5**

---

## 8. Overall User Satisfaction

### Formula

```text
User Satisfaction =
(Number of Satisfied Participants ÷ Total Participants) × 100
```

### Success Target

**≥ 80%**

---

# Quantitative Analysis

The following quantitative data should be collected:

- Task Completion Rate
- Completion Time
- Assignment Tracker Rating
- Pinned Links Rating
- Navigation Rating
- Screen Layout Rating
- Ease of Use Rating
- User Satisfaction

---

# Qualitative Analysis

Participant feedback should include:

- Difficult tasks
- Confusing navigation
- Missing information
- Interface issues
- Unexpected behaviour
- Suggestions
- User expectations

---

# Confusion Point Mapping

| ID | Confusion Point | Affected Requirement | Impact | Improvement |
|----|-----------------|----------------------|--------|-------------|
| CP-01 | Assignment Tracker difficult to locate | Assignment Tracker accessibility | High | Add homepage shortcut |
| CP-02 | Users unsure how to create assignments | Assignment creation | High | Add clear **Add Assignment** button |
| CP-03 | Form labels unclear | Assignment input | Medium | Improve labels and placeholders |
| CP-04 | Save confirmation missing | User feedback | High | Display success message |
| CP-05 | Pinned Links difficult to locate | Dashboard accessibility | Medium | Improve navigation |
| CP-06 | Pin icon confusing | Pinned Links usability | High | Replace icon with labelled button |
| CP-07 | Navigation labels unclear | Navigation consistency | High | Rename menu labels |
| CP-08 | Dashboard crowded | Dashboard layout | Medium | Improve spacing |
| CP-09 | Search difficult to find | Search functionality | Medium | Place search bar at top |
| CP-10 | Announcement section overlooked | Homepage visibility | Low | Highlight announcements |

---

# Requirement Coverage

| Requirement | Related Metric | Evidence |
|-------------|---------------|----------|
| Assignment Tracker Accessibility | Completion Rate | Observation |
| Assignment Creation | Ease of Use | Observation |
| Save Confirmation | Satisfaction | Feedback |
| Pinned Links Dashboard | Usefulness | Survey |
| Navigation | Navigation Rating | Observation |
| Dashboard Layout | Screen Layout | Survey |
| Homepage Announcements | Satisfaction | Observation |
| Search Function | Completion Time | Observation |

---

# Analytics Interpretation

## Low Completion Rate

Possible causes:

- Poor navigation
- Unclear buttons
- Missing instructions
- Difficult workflow

---

## High Completion Time

Possible causes:

- Too many steps
- Hidden actions
- Poor navigation
- Weak layout

---

## Low Usefulness

Possible causes:

- Missing features
- Difficult access
- Confusing interface

---

## Low Ease of Use

Possible causes:

- Poor navigation
- Weak visual hierarchy
- Confusing labels
- Missing feedback

---

# Improvement Priorities

## Critical

- Improve Assignment Tracker accessibility
- Improve navigation
- Add save confirmation

## High

- Improve dashboard layout
- Improve search visibility
- Improve form usability
- Improve icon labels

## Medium

- Better announcements
- Better spacing
- Add onboarding guidance

## Low

- Minor UI improvements
- Typography improvements

---

# Results Summary

The following metrics will be completed after usability testing.

| Metric | Target | Actual Result | Status |
|--------|--------|---------------|--------|
| Task Completion Rate | ≥70% | Pending | Pending |
| Completion Time | ≤2 min | Pending | Pending |
| Assignment Tracker | ≥4.0 | Pending | Pending |
| Pinned Links Dashboard | ≥4.0 | Pending | Pending |
| Ease of Use | ≥4.0 | Pending | Pending |
| Navigation | ≥4.0 | Pending | Pending |
| Screen Layout | ≥4.0 | Pending | Pending |
| User Satisfaction | ≥80% | Pending | Pending |

---

# Data Collection Sources

- Observation Notes
- Task Completion Records
- Completion Time
- Survey Responses
- Feedback Form
- Wireframe Usability Checklist
- Success Metrics Report

---

# Recommended Analysis Process

1. Conduct usability testing.
2. Record observations.
3. Measure completion rate.
4. Measure completion time.
5. Calculate averages.
6. Review participant comments.
7. Identify confusion points.
8. Map confusion points to requirements.
9. Prioritise improvements.
10. Update the prototype.
11. Repeat usability testing.

---

# Conclusion

The analytics framework combines quantitative metrics and qualitative observations to evaluate the Campus Life MVP. Mapping confusion points to system requirements helps identify usability issues and supports evidence-based improvements. The report provides a structured approach for improving the user experience and guiding future development.
# Core Metrics Analysis

## Overview

The usability testing dataset was analyzed to measure the performance of the Campus Life MVP. Three core metrics were calculated from the experimental results: Success Rate, Feedback Score, and Interest Level.

---

# Dataset Summary

| Item | Value |
|------|------:|
| Total Participants | 12 |
| Completed Tasks | 10 |
| Incomplete Tasks | 2 |

---

# Core Metrics

| Metric | Formula | Result | Target | Status |
|---------|---------|--------|--------|--------|
| Success Rate | (10 ÷ 12) × 100 | **83.3%** | ≥70% | ✅ Pass |
| Feedback Score | 51 ÷ 12 | **4.25 / 5.00** | ≥4.0 | ✅ Pass |
| Interest Level | 49 ÷ 12 | **4.08 / 5.00** | ≥4.0 | ✅ Pass |

---

# Calculations

## Success Rate

Completed Tasks = **10**

Total Tasks = **12**

```text
Success Rate
= (Completed Tasks ÷ Total Tasks) × 100

= (10 ÷ 12) × 100

= 83.3%
```

---

## Feedback Score

Usefulness Scores

```text
5 + 4 + 4 + 5 + 4 + 4 + 4 + 4 + 5 + 4 + 4 + 4
= 51
```

```text
Feedback Score

= 51 ÷ 12

= 4.25 / 5
```

---

## Interest Level

Interest Scores

```text
5 + 4 + 3 + 5 + 4 + 4 + 4 + 4 + 5 + 4 + 4 + 3
= 49
```

```text
Interest Level

= 49 ÷ 12

= 4.08 / 5
```

---

# Performance Analysis

## Success Rate

The prototype achieved a success rate of **83.3%**, exceeding the target of **70%**.

Most participants successfully completed the required tasks without assistance. Two participants were unable to complete all assigned tasks because of navigation and interface clarity issues.

---

## Feedback Score

The average usefulness rating was **4.25/5.0**.

Participants considered the Assignment Tracker, Search, Dashboard, and Task Detail features useful for managing coursework.

Minor improvements were suggested for:

- Submit button visibility
- Search filter labels
- Required field guidance
- Status colour indicators

---

## Interest Level

The average Interest Level was **4.08/5.0**.

Most participants indicated that they would use the Campus Life MVP again after minor interface improvements.

---

# Confusion Points

| Confusion Point | Frequency | Recommendation |
|-----------------|-----------|----------------|
| Submit button size | 2 | Increase button size |
| Search filter visibility | 2 | Improve filter labels |
| Status colour layout | 2 | Improve colour contrast |
| Required fields | 1 | Add placeholder guidance |
| Analytics presentation | 1 | Simplify dashboard |
| Filter tabs | 1 | Improve navigation |

---

# Requirement Validation

| Requirement | Result |
|-------------|--------|
| FR-03 Assignment Submission | ✅ Validated |
| FR-06 Assignment Search | ✅ Validated (Minor Revision) |
| FR-07 Task Detail View | ✅ Validated |
| FR-08 Deadline Status | ⚠ Needs Revision |
| FR-10 Admin Dashboard | ✅ Validated |

---

# Key Findings

- High task completion rate.
- High participant satisfaction.
- Strong interest in future use.
- Search and Assignment Tracker performed well.
- Dashboard usability requires minor improvements.
- Deadline status colours should be redesigned.
- Navigation labels should be clearer.

---

# Improvement Priorities

## High Priority

- Improve deadline status visibility.
- Improve search filter labels.
- Increase submit button visibility.

## Medium Priority

- Improve form guidance.
- Improve analytics dashboard.

## Low Priority

- Improve visual consistency.
- Refine spacing and typography.

---

# Conclusion

The Campus Life MVP performed well during usability testing.

The prototype achieved:

- **Success Rate:** **83.3%**
- **Feedback Score:** **4.25 / 5**
- **Interest Level:** **4.08 / 5**

All three core metrics met or exceeded the project success targets. The usability evaluation shows that the MVP is functional, useful, and positively received by participants. Future development should focus on improving navigation, deadline visibility, search filters, and interface clarity to further enhance the user experience.
