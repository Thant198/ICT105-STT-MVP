# User Testing Results

## 1. Testing Summary
- Date: 2026-03-25
- Number of testers: 5 ICT Students
- Prototype link: https://github.com/Thant198/ICT105-STT-MVP
- Testing location/platform: ICT Building Computer Lab / Browser Desktop View

## 2. Task Completion Summary
| Task ID | Task | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| T01 | Submit new assignment entry | Yes | None | Smooth form submission, fields are clear |
| T02 | Search/filter tasks by course code | Yes | Minor delay in button feedback | Instant search results rendered correctly |
| T03 | Update task status to "Submitted" | Partial | Dropdown menu slightly small | 1 user missed the action dropdown initially |
| T04 | Verify Student ID privacy masking | Yes | None | Student ID correctly displayed as 6601XXXX |

## 3. Common Usability Issues
| Issue ID | Issue Description | Severity | Related Requirement | Proposed Fix |
| --- | --- | --- | --- | --- |
| UI-01 | Action dropdown for status update is small on lower resolutions | Important | FR-08 | Increase button size and add clearer hover states |
| UI-02 | Search filter button label could be more explicit | Useful | FR-06 | Rename filter button to "Filter by Course" |

## 4. User Feedback Summary
- Liked: Clean and modern interface, very fast search/filter capability, and automatic privacy masking (`6601XXXX`).
- Disliked/Misunderstood: Small action icons on status updates were initially overlooked by one tester.
- Suggested: Add color-coded deadline badges (e.g., Red for < 24 hrs left) on task cards.

## 5. Evidence-Based Decision
- Choice: Ready for final improvement
- Explanation: All primary user tasks were successfully executed with a 90%+ overall completion rate. The identified usability issues (UI-01 and UI-02) are minor visual enhancements that can easily be addressed in the final sprint before Lab 14.
