# Lab 04 - User Stories and Acceptance Criteria

## User Story Format

As a [user role], I want to [goal/action], so that [benefit/value].

---

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to receive announcements in one place, so that I do not miss important updates. | FR-01 | Must | **Given** a new announcement is posted, **when** I log in, **then** I can immediately see the latest announcement on the dashboard. | Dashboard screenshot |
| US-02 | Student | As a student, I want to view all project deadlines, so that I can complete my work on time. | FR-02 | Must | **Given** deadlines exist, **when** I open the deadlines page, **then** all upcoming deadlines are displayed in chronological order. | Deadline page screenshot |
| US-03 | Student | As a student, I want to access project files and shared links from one place, so that I do not lose important documents. | FR-03 | Must | **Given** project files are uploaded, **when** I open the project page, **then** I can access every shared file and link. | Project page screenshot |
| US-04 | Student | As a student, I want to receive reminder notifications before deadlines, so that I can avoid missing submissions. | FR-04 | Should | **Given** a deadline is approaching, **when** it is within the reminder period, **then** the system displays a notification. | Notification screenshot |
| US-05 | Student | As a student, I want to communicate with my project members in one platform, so that project coordination becomes easier. | FR-05 | Should | **Given** I open a project, **when** I select Team Chat, **then** I can send and receive messages with project members. | Chat page screenshot |
| US-06 | Student | As a student, I want to browse campus events in one place, so that I can easily participate in activities. | FR-06 | Could | **Given** events are available, **when** I open the Events page, **then** I can see event details, dates, and registration information. | Events page screenshot |

---

## Acceptance Criteria Checklist

A good acceptance criterion should be:

- testable;
- observable in the final prototype;
- connected to a requirement;
- connected to user evidence;
- not too vague.

---

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-07 | Online event registration is outside the MVP scope. | Add after the MVP is completed. |
| US-08 | Push notifications require backend implementation. | Add in a future version with server support. |
| US-09 | Lecturer and staff management features are not a priority for the first prototype. | Add after student features are completed. |
