# Risk Register

**Project:** Campus Life – Student Project Management System (MVP)

| Risk ID | Category | Risk Description | Affected Feature | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---------|----------|------------------|------------------|----------|------------|-------------------|--------|-----------------|--------|
| R-01 | Security | Unauthorized access to admin dashboard | Admin Panel | High | Medium | Implement Role-Based Access Control (RBAC). | Technical Lead | Issue #60 | Open |
| R-02 | Privacy | Personal information exposed to other students | User Profile | High | Medium | Display minimum personal data only. | UX/UI Lead | Issue #60 | Open |
| R-03 | Data Integrity | Users modify records they do not own | Assignment Tracker | High | Medium | Verify ownership before update/delete. | Technical Lead | Issue #60 | Open |
| R-04 | Input Validation | Invalid or malicious input submitted | Forms | Medium | High | Server-side and client-side validation. | Technical Lead | Issue #60 | Open |
| R-05 | File Upload | Malicious file upload | Assignment Upload | High | Low | Restrict file type and size. | Technical Lead | Issue #60 | Open |
| R-06 | Authentication | Weak passwords compromise accounts | Login System | High | Medium | Enforce password requirements. | Technical Lead | Issue #60 | Open |
| R-07 | Availability | Server downtime prevents student access | Entire System | Medium | Low | Regular backups and monitoring. | Product Lead | Issue #60 | Open |
| R-08 | Legal | Copyright violation from third-party assets | UI Assets | Medium | Low | Use licensed or open-source assets only. | Documentation Lead | Issue #60 | Open |
| R-09 | Privacy | Sensitive information stored unnecessarily | Database | High | Low | Collect only essential data. | Technical Lead | Issue #60 | Open |
| R-10 | Security | Session remains active after logout | User Session | Medium | Medium | Implement automatic session expiration. | Technical Lead | Issue #60 | Open |

---

# Overall Risk Assessment

| Risk Level | Count |
|------------|------:|
| High | 5 |
| Medium | 5 |
| Low | 0 |

## Overall Decision

The Campus Life MVP is suitable to continue development after implementing the recommended privacy and security mitigations.

### Required Actions Before Final Prototype

- Implement role-based access control.
- Validate all user input.
- Restrict file uploads.
- Protect personal information.
- Enforce authentication.
- Apply secure session management.
- Use HTTPS for deployment.
- Review third-party asset licenses.

**Status:** Continue with Mitigation
