# Security Risk Check

**Project:** Campus Life – Student Project Management System (MVP)  
**Course:** ICT105 – Fundamental Technology Entrepreneurship  
**Team:** STT

---

# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|------|---------------|---------------|------------|------------|-------|
| Form Input | Can incomplete or invalid data be submitted? | Validation is partially implemented. | Medium | Require mandatory fields, validate email format, limit input length, sanitize all user input. | Technical Lead |
| Authentication | Can unauthorized users access the system? | Login required but role control needs improvement. | High | Implement authentication and role-based access control (RBAC). | Technical Lead |
| Admin Function | Can normal users access admin actions? | Admin features are separated but require authorization checks. | High | Restrict admin dashboard to administrator accounts only. | Technical Lead |
| Data Display | Is private information visible to everyone? | Student information is partially visible. | High | Display only necessary information and hide personal details. | UX/UI Lead |
| Assignment Records | Can users modify other users' assignments? | No ownership validation implemented. | High | Allow users to edit only their own records. | Technical Lead |
| Pinned Links | Can anyone edit pinned resources? | Editing permissions are unclear. | Medium | Restrict editing to authorized users. | Technical Lead |
| Search Function | Can search expose sensitive information? | Search returns all matching records. | Medium | Filter results based on user permissions. | Technical Lead |
| Status Update | Can records be edited without control? | Update validation is limited. | Medium | Verify user identity before every update. | Technical Lead |
| Public Links | Does a public link expose data that should remain private? | Shared links may expose information. | Medium | Disable indexing and require login for sensitive pages. | Technical Lead |
| File Upload | Can unsafe files be uploaded? | File validation not implemented. | High | Allow only PDF/JPG/PNG, restrict file size, scan uploaded files. | Technical Lead |
| Session Management | Can inactive sessions remain logged in? | Session timeout not configured. | Medium | Automatic logout after inactivity. | Technical Lead |
| Database | Is sensitive data stored securely? | Basic storage only. | High | Encrypt sensitive data and use secure database permissions. | Technical Lead |

---

# Security Mitigation Summary

## Input Validation
- Validate all required fields.
- Reject empty or invalid input.
- Prevent SQL Injection.
- Prevent Cross-Site Scripting (XSS).

## Authentication
- Require login before accessing user features.
- Use secure passwords.
- Restrict unauthorized access.

## Authorization
- Separate Admin and Student permissions.
- Prevent unauthorized editing and deletion.

## Data Protection
- Display minimum personal information.
- Protect student data from unauthorized viewing.
- Use encrypted connections (HTTPS).

## File Upload Protection
- Restrict upload type.
- Restrict maximum file size.
- Reject executable files.

## Session Security
- Auto logout after inactivity.
- Prevent session hijacking.

## Security Decision

**Decision:** Continue with Mitigation

The Campus Life MVP can continue to implementation after applying the recommended security controls listed above.
