# Lab 08 - Customer Validation Summary

## 1. Project Title
Campus Life Hub

## 2. Prototype Tested
- Prototype version: v0.1
- Prototype link or screenshot location: `/screenshots/project-dashboard.png`
- Main task tested: Managing task deadlines, filtering course assignments, and utilizing the admin management screen.
- Related requirements from `system-requirements.md`: FR-03, FR-06, FR-07, FR-08, FR-09, FR-10, FR-11, FR-12, FR-15

## 3. Test Users
- TU-01 (Student): Manages multiple group project deadlines.
- TU-02 (Student): Validates task sorting and filtering by course.
- TU-03 (Student): Tests deadline tracking and task urgency status.
- TU-04 (Student): Evaluates the input fields for adding new assignments.
- TU-05 (Student): Validates navigation speed compared to chat groups.
- TU-06 (Admin/Staff): Class representative evaluating admin task controls.
- TU-07 (Student): Tests layout clarity on the task detail sub-page.
- TU-08 (Student): Validates submission confirmation prompts.
- TU-09 (Student): Tests course-specific keyword search mechanics.
- TU-10 (Admin/Staff): Course moderator validating the performance analytics summary.
- TU-11 (Student): Tests form validation warnings for empty fields.
- TU-12 (Student): Validates data privacy and information display controls.

## 4. Validation Method
- Testing method: Structured UX testing using a clickable Figma prototype with a post-test questionnaire.
- Date/time: 2026-07-15
- Location or online platform: Conducted via Discord screen-sharing and on-campus face-to-face sessions.
- Number of testers: 12 unique testers.
- Data collected: Task completion status, completion time in seconds, subjective confusion points, core usability scores (1-5), and qualitative feedback comments.

## 5. Summary of Results
- Total test users: 12 (Standard validation sample size achieved)
- Task success rate: 83.3% (Core user workflows are functional but need refinement)
- Average feedback score: 4.17 / 5 (High perceived usability and customer satisfaction)
- Average interest level: 4.25 / 5 (Strong validation of product demand among ICT students)
- Most common confusion point: Search/filter (Category filtering layout needs a clearer, more visible UI)

## 6. Key User Comments
- "The assignment input form is clear and quick to complete, but the submission button could be larger."
- "Search and filtering work well, but course category labels should be more explicit."
- "The status information needs to show progress indicators more clearly on the dashboard."
- "Privacy note: The system should hide sensitive user details from public views."

## 7. Affected Requirements
- FR-06: Users struggled with finding filter options during keyword searches. -> Required Improvement: Make the filter dropdown highly visible on the main page.
- FR-08: Testers noted that task tracking updates weren't distinct enough. -> Required Improvement: Enhance color codes for active, pending, and completed statuses.
- FR-03: Users requested better explanation text inside form input fields. -> Required Improvement: Add placeholder tooltips to guide form completion.
- FR-15: User feedback flagged potential data exposure risks. -> Required Improvement: Implement stricter data visibility rules on public views.

## 8. Conclusion
The current MVP direction is Partially Validated with Revisions Required. While core target metrics exceed baseline expectations, UX improvements on filtering and layout configurations are necessary before proceeding to final code implementation.

