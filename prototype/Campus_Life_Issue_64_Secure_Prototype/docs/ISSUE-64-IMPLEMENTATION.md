# Issue #64 — Prototype Privacy and Security Mitigations

**Project:** Campus Life – Student Project Management System (MVP)  
**Course:** ICT105 – Fundamental Technology Entrepreneurship  
**Team:** STT

## Implemented Controls

| Risk Area | Code Mitigation | Evidence |
|---|---|---|
| Invalid form input | HTML constraints plus JavaScript validation | `prototype/index.html`, `prototype/js/app.js` |
| XSS / unsafe display | Input cleaning and DOM `textContent` instead of `innerHTML` | `sanitizeText()`, `createTextCell()` |
| Unnecessary personal data | Nickname/anonymous ID only; privacy notice and sensitive-data warning | Assignment form and privacy section |
| Unauthorized admin actions | Student/Admin demo role; status changes, deletion and export are admin-only | `isAdmin()`, guarded admin functions |
| Unsafe file uploads | PDF/PNG/JPG allow-list and 5 MB limit | `validateAttachment()` |
| Unsafe public links | HTTPS-only URL validation and `noopener noreferrer` | `validateHttpsUrl()`, link rendering |
| Double form submission | Submission locks and disabled buttons | `submittingAssignment`, `submittingLink` |
| Data exposure | Owner masking and notes redaction during export | `maskOwner()`, `exportMaskedData()` |
| Session risk | 30-minute inactivity timeout resets role | `enforceSessionTimeout()` |
| User control | Clear-data function and explicit consent checkboxes | `clearPrototypeData()` and forms |

## Security Decision

**Continue with mitigation — implemented in prototype code.**

The prototype is suitable for educational demonstration. It does not provide production-grade authentication or server-side authorization. A production system would require a secure backend, database access rules, password hashing, audit logs, HTTPS hosting, and server-side validation.

## GitHub Evidence

Recommended commit message:

```text
feat: implement Lab 09 privacy and security mitigations (#64)
```

Recommended issue closing comment:

```text
Completed Issue #64. Refactored the static HTML/JavaScript prototype with input validation, data minimization, consent notice, file restrictions, HTTPS-only links, role-based admin controls, masked data display/export, delete confirmations, double-submit prevention, and session timeout.
```
