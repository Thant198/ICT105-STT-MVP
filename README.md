# ICT105-STT-MVP

## Course Information

Course Code: ICT105

Course Name: Fundamental Technology Entrepreneurship

Instructor: Dr. Herison Surbakti

Project Type: 14-Labs Continuous IT Startup MVP Development

## Team Name

STT

## Team Members and Roles

| Name | Role | Responsibility |
|------|------|------|
| Thant Sithu Soe | Product Lead | Define problem area and target users |
| Tay Za Aung | Technical Lead | Manage repository and prototype development |
| Sut Lat Shawng | UX/UI Lead & Documentation Lead | Design user interface and maintain documentation |

## Initial Problem Area

University students often struggle to manage group projects, assignment deadlines, project files, and task responsibilities. Important information is usually scattered across chat groups, documents, and personal notes, causing missed deadlines and poor coordination.

## Target Users

- University students
- Student project teams
- Class representatives
- Student organizations

## Initial IT Venture Direction

Develop a Student Project Management System that helps students organize projects, assign tasks, track deadlines, store files, and monitor project progress in one platform.

## Technology Possibility

Possible technologies:

- Web Application
- Dashboard System
- Cloud-Based System
- SaaS Platform
- Mobile-Friendly Interface

Technology Stack:

- HTML
- CSS
- JavaScript
- GitHub
- Local Storage
- Cloud Storage

## Repository Structure

### docs/
Contains project documentation, reports, idea logs, weekly logbooks, and team records.

### prototype/
Contains prototype source code and MVP development files.

### data/
Contains survey data, user feedback, and validation records.

### finance/
Contains budget planning and financial estimation documents.

### diagrams/
Contains system diagrams, workflow diagrams, and architecture designs.

### screenshots/
Contains evidence of project progress and repository development.

### pitch/
Contains presentation materials and final pitch documents.

## Weekly Progress Log

| Week | Main Activity | Output | Status |
|------|--------------|--------|--------|
| Lab 1 | Repository Setup and Idea Log | Repository, Team Profile, Initial Idea Log | Completed |

## Current Status

The team has successfully created the GitHub repository and organized the required folder structure. Team roles have been assigned and project documentation has been prepared. Three potential IT venture ideas have been identified and analyzed. The team is currently focusing on the Student Project Management System as the primary MVP direction. Initial planning and repository setup activities for Lab 1 have been completed successfully.

## Next Step

1. Validate the selected problem area.
2. Conduct user interviews and surveys.
3. Identify user pain points.
4. Analyze existing alternatives.
5. Prepare opportunity scanning documentation.
6. Begin MVP planning and prototype design.
## Initial Problem Area

University students often struggle to manage project tasks, assignment deadlines, project files, and team communication. Important information is usually scattered across chat groups, documents, and personal notes, making it difficult to stay organized and complete projects efficiently.

## Target Users

- University students
- Student project teams
- Students working on assignments and semester projects

## Selected IT Venture Direction

Our team selected the Student Project Management System. The target users are university students who need a better way to organize project tasks, deadlines, files, and team communication. We selected this idea because it is useful, feasible, and can be developed as a web-based MVP using HTML, CSS, and JavaScript without requiring IoT devices or advanced cybersecurity implementation.

## Current Status

In Lab 02, the team reviewed six possible IT opportunities, evaluated them using the NUF (New, Useful, Feasible) scoring method, and selected one semester project idea. The Student Project Management System received the highest score and was chosen as the official MVP project.

## Next Step

In Lab 03, the team will prepare customer discovery questions, interview university students, collect user evidence, validate pain points, and identify detailed user requirements for the MVP.

## Customer Problem Discovery Summary

In Lab 03, our team collected early problem evidence from university students to validate the selected problem from Lab 02. The goal was to understand how students currently manage project deadlines, announcements, and team communication, and to identify the difficulties they experience.

## Target Respondents

The team interviewed and surveyed university students who regularly participate in academic projects, group assignments, and campus activities. These students are the primary users who experience the identified problems.

## Main Evidence Found

Several students reported missing important announcements because information was shared across multiple platforms such as LINE, Facebook Groups, Messenger, and Email. Students also mentioned difficulties tracking project deadlines and coordinating with team members. Common workarounds included checking multiple communication channels, setting personal reminders, and relying on friends for updates.

## Updated Problem Statement

University students experience difficulties managing project-related information because announcements, deadlines, and team communication are spread across multiple platforms. This often results in missed announcements, forgotten deadlines, and inefficient team coordination.

## Decision for Next Step

The team will continue with the same problem direction because customer discovery findings confirmed that the problem is real, recurring, and important to the target users. The next step is to design an MVP that focuses on centralized announcements, deadline tracking, and team
# Lab 04 - MVP Feature List

## MVP Decision Rule
The MVP should include the smallest set of features that can demonstrate the core problem-solution fit by the end of the semester.

## MoSCoW Prioritization

| Feature ID | Feature Name | Problem Solved | Related User Story | Priority (Must/Should/Could/Won't) | Technical Complexity (1-5) | User Value (1-5) | Evidence Strength (1-5) | Include in Final Prototype? |
|---|---|---|---|---|---:|---:|---:|---|
| F01 | Centralized Announcement Dashboard | Information fragmentation across Facebook/LINE/LMS | US-01 | Must | 2 | 5 | 5 | Yes |
| F02 | Unified Deadline Calendar & Alerts | Missed deadlines due to scattered schedule updates | US-02 | Must | 3 | 5 | 5 | Yes |
| F03 | Project-Specific Shared Links Repository | Lost Google Drive/GitHub file links in chat histories | US-03 | Should | 2 | 4 | 4 | Yes |
| F04 | Automatic Push Notifications to Mobile | Late checking of emails and noisy chat groups | US-04 | Could | 4 | 4 | 3 | No |
| F05 | AI-Powered Smart Syllabus Chatbot | Students asking repetitive questions to staff/lecturers | US-05 | Won't | 5 | 3 | 2 | No |

## Must-Have Features
- Feature 1 (Centralized Announcement Dashboard): A single feed that aggregates all crucial campus and course updates into one clear place, categorized by tags (e.g., Exams, Events, Coursework).
- Feature 2 (Unified Deadline Calendar & Alerts): An integrated calendar that pulls and displays all deadlines and project milestones from various classes, ensuring students never miss an update.

## Should-Have Features
- Feature 1 (Project-Specific Shared Links Repository): A dedicated, pinned section within each group project dashboard to store and organize important links (e.g., Google Docs, GitHub, Trello) so they don't get lost in group chats.

## Could-Have / Future Features
- Feature 1 (Automatic Push Notifications to Mobile): Sending real-time mobile push notifications to override noisy social media alerts, ensuring immediate awareness of emergency class cancellations or schedule updates.

## Not in MVP
We are intentionally excluding F05 (AI-Powered Smart Syllabus Chatbot) from our MVP. While it is an attractive feature for handling repetitive student inquiries, building a reliable AI chatbot has high technical complexity (5/5) and requires significant development time. Furthermore, our customer discovery evidence shows that the core pain point is *information fragmentation*, which can be solved more effectively by organizing data on a dashboard rather than building a conversational AI for this initial prototype.

# Lab 05: Product Concept and UI/UX Wireframe

## Product Concept

The Campus Life Management System is a web-based platform designed to help university students manage announcements, projects, events, and academic information in one place. The system reduces the problem of scattered information across multiple communication channels by providing a centralized platform where users can quickly access important updates, submit information, and track project activities.

## Requirement-Driven Screens

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | /wireframes/homepage.png |
| Input / Submission Form | FR-03, FR-10, FR-11 | /wireframes/input-form.png |
| Records / Information List | FR-05, FR-06, FR-08 | /wireframes/record-list.png |
| Record Detail View | FR-07, FR-08 | /wireframes/detail-view.png |
| Dashboard / Summary | FR-12 | /wireframes/dashboard.png |
| Admin / Manager View | FR-09, FR-08 | /wireframes/admin-view.png |

## User Flow

The user flow illustrates how students and administrators interact with the system. Students can log in, browse announcements, projects, and events, search for information, view detailed records, and submit new information through the input form. Administrators can manage records by approving, editing, updating, or deleting information. The complete user flow is available in:

- [user-flow.jpeg](https://github.com/Thant198/ICT105-STT-MVP/blob/0bc594b2dddb1dae63b180460b3904a1f2258482/diagrams/user-flow.JPEG)

## Team Contribution

All team members contributed to the same GitHub repository throughout Lab 05. Responsibilities were divided according to each member's role, including Product Lead, Tech Lead, and UI/UX & Documentation Lead. Team members collaborated on product planning, system requirements, wireframe design, documentation, and repository updates.

# Lab 06 Update - Business Model Canvas and Technical Architecture

## Lab 06 Summary

In Lab 06, our group transformed the project concept into a structured business and technical design. We developed the Business Model Canvas, mapped MVP features to user and operational value, designed the technical architecture, defined the system data structure, and created the System Architecture and Data Flow diagrams. These artifacts provide a clear foundation for implementing the final prototype.

## Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagrams/system-architecture.png)
- [Data Flow Diagram](diagrams/data-flow.png)
- [Weekly Logbook](docs/weekly-logbook.md)

## Technical Direction

The prototype will use a **frontend-only architecture** built with **HTML, CSS, and JavaScript**. Static sample data (JSON) will be used to demonstrate announcements, projects, events, and notifications. This approach keeps the prototype simple while allowing the team to validate the user interface, navigation, and core functionality before developing a database-backed version in the future.

## Final Prototype Connection

The outputs from Lab 06 serve as the blueprint for the final prototype. The Business Model Canvas defines the product value and target users, the Feature-Value Mapping links requirements to user needs, the Technical Architecture specifies how the system will be organized, and the Data Structure identifies the information managed by the system. Together, these deliverables ensure that the final prototype aligns with the customer discovery evidence, user stories, and functional requirements developed in previous labs.

# README Update - Lab 07

## Lab 07: MVP Experiment Design

### Experiment Objective

The objective of this MVP experiment is to validate whether university students can easily access campus announcements, events, student projects, and campus information through a centralized web platform. The experiment also evaluates the usability of the navigation, search functionality, and announcement management features before full system development.

---

### Critical Assumptions

1. Students prefer a centralized platform instead of checking multiple communication channels.
2. Users can easily navigate the system and quickly find campus information.
3. Administrators can efficiently publish announcements using the management interface.

---

### MVP Experiment Type

**Interactive HTML/CSS/JavaScript Prototype**

This experiment uses a clickable web prototype because it allows users to interact with the interface, test navigation, perform searches, and simulate announcement management before implementing a complete backend system.

---

### Success Metrics

- At least 80% of users can navigate to all major pages without assistance.
- At least 80% of users can successfully locate information using the search function.
- At least 80% of participants report that the interface is easy to understand.
- At least 80% of users can complete the announcement management task successfully.

---

### Files Added in Lab 07

- `/docs/mvp-experiment-plan.md`
- `/docs/critical-assumptions.md`
- `/docs/experiment-script.md`
- `/docs/success-metrics.md`
- `/docs/feedback-form.md`
- `/docs/weekly-logbook.md`

---

### Connection to Final Prototype

The MVP experiment will provide user feedback on usability, navigation, search functionality, and announcement management. The collected feedback will be used to improve the interface, simplify user interactions, and prioritize features for the final CampusLife Hub prototype.

# README Update - Lab 08

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective

The group tested the CampusLife Hub MVP prototype with target users to evaluate navigation, announcements, search, dashboard, and administration features. User feedback was collected to identify usability issues and improve the prototype before further implementation.

---

### Prototype Version Tested

- **Version:** MVP Prototype v1.0
- **Link:** https://thant198.github.io/ICT105-STT-MVP/prototype/
- **Screenshots:** `/screenshots/validation-test-screens.png`

---

### Analytics Summary

| Metric | Result |
|---|---:|
| Total test users | 12 |
| Task completion rate | 83.3% |
| Average feedback score (Ease of Use) | 3.83 / 5 |
| Average interest level | 4.08 / 5 |
| Main confusion point | Search labels, status tracking layout, and required form guidance |

---

### MVP Decision

The group decided to **revise** the prototype before the next implementation stage. Although the task completion rate and user interest met the target, usability feedback indicated that several interface improvements are needed. The next iteration will improve search labels, form guidance, and status tracking to provide a better user experience.

---

### Files Added

- `/data/validation-results.csv`
- `/docs/customer-validation-summary.md`
- `/docs/analytics-insights.md`
- `/docs/mvp-decision.md`
- `/screenshots/validation-test-screens.png`
- `/docs/weekly-logbook.md`

# Lab 09 - Responsible IT Check

## Responsible Design Summary

During Lab 09, the team reviewed the Campus Life Hub prototype to identify privacy, ethical, intellectual property, and basic security considerations.

The privacy review confirmed that the prototype collects only the minimum information required to demonstrate the system workflow. Sensitive personal information such as passwords, financial records, medical information, biometric data, and home addresses are not collected. Mock data is used throughout the prototype to protect user privacy.

The ethical review focused on responsible data handling, transparency, and the use of sample data during demonstrations. The team ensured that the prototype avoids misleading claims and displays only information necessary for its intended purpose.

The intellectual property review identified third-party resources used within the prototype, including icons, fonts, CSS libraries, and JavaScript libraries. Appropriate attribution and licensing requirements were documented where necessary.

The security review identified several potential risks including unauthorized access to administrative functions, insufficient input validation, and possible exposure of administrative features. Appropriate mitigation strategies were documented in the Risk Register and security review documentation.

---

## Files Added

- docs/legal-ethical-checklist.md
- docs/privacy-and-data-protection.md
- docs/ip-and-third-party-assets.md
- docs/security-risk-check.md
- docs/risk-register.md
- docs/updated-requirements-note.md
- docs/weekly-logbook.md

---

## Requirement Update

The `system-requirements.md` document was reviewed during Lab 09 as part of the Responsible IT assessment.

No changes were made to the functional or non-functional requirements because the existing system requirements already matched the current Campus Life Hub prototype. The Lab 09 review focused on privacy, ethical, intellectual property, and security documentation rather than modifying the system requirements.
---

## Team Contributions

| Member | Contribution |
|---------|--------------|
| **Thant Sithu Soe** | Created the Data Inventory and Privacy Review documentation, reviewed the prototype to extract data fields, updated the repository README, and completed the Weekly Logbook. |
| **Tay Za Aung** | Prepared the Legal, Ethical, and Intellectual Property documentation and created the Updated Requirements Note. |
| **Sutt** | Built the Security Risk Check, prepared the Risk Register, and implemented Privacy and Security Mitigations within the prototype. |
