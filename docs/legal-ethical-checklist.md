# Legal and Ethical Checklist

## Project Title
Campus Life Hub – Student Project and Assignment Management System

## Ethical Review
| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | Yes | The system shows a clear welcome message explaining it is an assignment tracker. | Add a short user consent notice on the signup/login page. | Nico | #1 |
| The prototype avoids misleading claims. | Yes | The platform only promises to track academic deadlines, not to auto-grade or guarantee marks. | Keep features strictly focused on task management and organization. | Nico | #1 |
| The prototype does not collect unnecessary sensitive data. | Yes | It only collects Student ID, Name, and Course info. No national IDs or passwords are saved. | Conduct regular data inventory audits to ensure minimal data retention. | Nico | #1 |
| Users can understand what happens after submission. | Yes | When a student adds an assignment, a success status message is displayed. | Ensure clear status labels (Pending, Completed, Overdue) on the dashboard. | Nico | #1 |
| Admin or manager actions are clearly separated from user actions. | Yes | Class Representatives and Lecturers have a dedicated Admin panel to post tasks. | Implement role-based access control (RBAC) to block normal students from admin views. | Nico | #1 |
| The prototype avoids unfair or harmful treatment of users. | Yes | All students receive the exact same notifications and updates simultaneously. | Ensure notifications use standard time formatting to prevent confusion across different devices. | Nico | #1 |

## Summary Decision
- Safe to continue: Yes with revision
- Required revision before implementation: Add a simple data-use consent checkbox on the user profile creation screen.
