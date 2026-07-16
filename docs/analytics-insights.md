````markdown
# Analytics Insights Report

**Project:** Campus Life – Student Project Management System (MVP)  
**Course:** ICT105 – Fundamental Technology Entrepreneurship  
**Team:** STT  
**Document:** analytics-insights.md  
**Version:** 1.0

---

# Purpose

This document explains how usability testing metrics are interpreted and how identified confusion points are mapped to the affected system requirements. It provides evidence-based insights that help improve the usability, accessibility, and effectiveness of the Campus Life MVP.

---

# Objectives

- Measure user performance while completing core tasks.
- Evaluate the efficiency of the user interface.
- Measure the usefulness of key features.
- Identify usability issues.
- Map confusion points to system requirements.
- Prioritize future improvements using collected evidence.

---

# Evaluation Metrics

## 1. Task Completion Rate

### Description

Measures the percentage of participants who successfully complete each task without assistance.

### Formula

```text
Task Completion Rate =
(Number of Successful Participants ÷ Total Participants) × 100
```

### Success Target

- **≥ 70%**

### Interpretation

| Result | Interpretation |
|---------|----------------|
| 90–100% | Excellent |
| 70–89% | Acceptable |
| Below 70% | Improvement Required |

---

## 2. Average Task Completion Time

### Description

Measures the average amount of time users need to complete each task.

### Formula

```text
Average Completion Time =
Total Completion Time ÷ Number of Participants
```

### Success Target

- **≤ 2 minutes**

### Interpretation

| Time | Interpretation |
|------|----------------|
| Under 2 min | Efficient |
| 2–3 min | Acceptable |
| Above 3 min | Workflow Needs Improvement |

---

## 3. Assignment Tracker Usefulness

Participants rate usefulness using a **1–5 Likert Scale**.

| Rating | Meaning |
|---------|----------|
| 5 | Very Useful |
| 4 | Useful |
| 3 | Neutral |
| 2 | Slightly Useful |
| 1 | Not Useful |

### Success Target

**Average ≥ 4.0 / 5**

---

## 4. Pinned Links Dashboard Usefulness

Measured using the same **1–5 Likert Scale**.

### Success Target

**Average ≥ 4.0 / 5**

---

## 5. Ease of Use

Measures how easy participants find the overall interface.

### Success Target

**Average ≥ 4.0 / 5**

---

## 6. Navigation Rating

Evaluates how easily participants can locate important features.

### Success Target

**Average ≥ 4.0 / 5**

---

## 7. Screen Layout Rating

Evaluates readability, organization, spacing, and visual hierarchy.

### Success Target

**Average ≥ 4.0 / 5**

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

The following numerical data should be collected during usability testing.

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

Collect participant comments regarding:

- Difficult tasks
- Confusing navigation
- Missing information
- Interface problems
- Unexpected behavior
- Suggestions
- User expectations

---

# Confusion Point Mapping

| ID | Confusion Point | User Behavior | Affected Requirement | Related Metric | Impact | Recommended Improvement |
|----|-----------------|---------------|----------------------|---------------|--------|-------------------------|
| CP-01 | Assignment Tracker difficult to locate | Users searched multiple pages | Assignment Tracker accessibility | Completion Rate | High | Add homepage shortcut |
| CP-02 | Users unsure how to create assignments | Users hesitated | Assignment creation | Ease of Use | High | Add clear "Add Assignment" button |
| CP-03 | Assignment form unclear | Users asked for help | Input usability | Ease of Use | Medium | Improve labels |
| CP-04 | Save confirmation missing | Users clicked Save repeatedly | System feedback | Satisfaction | High | Show success message |
| CP-05 | Pinned Links difficult to locate | Users searched dashboard | Pinned Links access | Completion Time | Medium | Improve navigation |
| CP-06 | Pin icon confusing | Users guessed its function | Pinned Links usability | Ease of Use | High | Replace with labeled button |
| CP-07 | Navigation labels unclear | Wrong menu selected | Navigation | Navigation Rating | High | Rename menu labels |
| CP-08 | Dashboard crowded | Important cards ignored | Dashboard layout | Screen Layout | Medium | Improve spacing |
| CP-09 | Search difficult to find | Manual browsing | Search feature | Completion Time | Medium | Move search bar to top |
| CP-10 | Announcement section missed | Participants ignored announcements | Homepage visibility | Satisfaction | Low | Highlight announcements |

---

# Requirement Coverage

| Requirement | Related Metric | Evidence |
|-------------|---------------|----------|
| Assignment Tracker accessibility | Completion Rate | Observation + Survey |
| Assignment creation | Ease of Use | Observation |
| Save confirmation | Satisfaction | User Feedback |
| Pinned Links usability | Usefulness Rating | Survey |
| Navigation consistency | Navigation Rating | Observation |
| Dashboard clarity | Screen Layout | Survey |
| Homepage announcements | Satisfaction | Observation |
| Search functionality | Completion Time | Observation |

---

# Analytics Interpretation

## Low Completion Rate

If Task Completion Rate is below **70%**, investigate:

- Navigation
- Labels
- Instructions
- Accessibility

---

## High Completion Time

If Average Completion Time exceeds **2 minutes**, review:

- Workflow
- Number of steps
- Navigation
- Search
- Interface layout

---

## Low Usefulness Rating

If ratings fall below **4.0**, investigate:

- Missing functionality
- Feature discoverability
- User expectations

---

## Low Ease of Use

Possible causes include:

- Poor layout
- Confusing labels
- Inconsistent navigation
- Missing feedback

---

## Low Satisfaction

Possible causes include:

- Failed tasks
- Missing features
- Slow workflows
- Poor interface design

---

# Improvement Priorities

## Critical

- Assignment Tracker accessibility
- Navigation improvements
- Save confirmation messages

## High

- Improve dashboard layout
- Improve search visibility
- Improve icon labels
- Improve form usability

## Medium

- Better announcements
- Better spacing
- Additional onboarding tips

## Low

- Minor UI polishing
- Typography improvements

---

# Example Results

| Metric | Target | Example | Status |
|--------|--------|---------|--------|
| Task Completion Rate | ≥70% | 85% | ✅ |
| Average Completion Time | ≤2 min | 1.7 min | ✅ |
| Assignment Tracker | ≥4.0 | 4.4 | ✅ |
| Pinned Links | ≥4.0 | 4.3 | ✅ |
| Navigation | ≥4.0 | 3.9 | ❌ |
| Screen Layout | ≥4.0 | 4.2 | ✅ |
| Ease of Use | ≥4.0 | 4.3 | ✅ |
| Satisfaction | ≥80% | 88% | ✅ |

---

# Data Collection Sources

- Observation Notes
- Screen Recording
- Task Completion Records
- Time Measurements
- Survey Responses
- Open-ended Feedback
- Wireframe Usability Checklist
- Success Metrics Report

---

# Recommended Analysis Process

1. Conduct usability testing.
2. Record participant behavior.
3. Measure task completion.
4. Record completion time.
5. Calculate metrics.
6. Analyze qualitative feedback.
7. Identify confusion points.
8. Map confusion points to requirements.
9. Prioritize improvements.
10. Update the prototype.
11. Repeat usability testing.

---

# Conclusion

The analytics framework combines quantitative metrics with qualitative observations to evaluate the Campus Life MVP. Measuring completion rate, completion time, usefulness, ease of use, navigation, layout, and satisfaction provides clear evidence for identifying usability issues. Mapping confusion points to affected requirements enables the STT team to prioritize improvements, refine the user experience, and support continuous iteration throughout MVP development.
````
