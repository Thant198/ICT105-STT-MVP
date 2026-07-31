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

University students often struggle to manage group projects, assignment deadlines, project files, and task responsibilities. Important information is often scattered across chat groups, documents, and personal notes, making it difficult to stay organized and collaborate effectively.

## Target Users

- University students
- Student project teams
- Class representatives
- Student organizations

## Initial IT Venture Direction

Develop a web-based Student Project Management System that helps students organize projects, assign tasks, manage deadlines, store project resources, and improve team collaboration in one platform.

## Technology Possibility

Possible technologies:

- Web application
- Dashboard system
- SaaS platform
- Mobile-friendly interface
- Cloud-based system

Possible technology stack:

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

- [`/docs/mvp-experiment-plan.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/2e265e037e51d5da7f4635d425fa5c76e5ac39ce/docs/mvp-experiment-plan.md)
- [`/docs/critical-assumptions.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/2e265e037e51d5da7f4635d425fa5c76e5ac39ce/docs/critical-assumptions.md)
- [`/docs/experiment-script.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/2e265e037e51d5da7f4635d425fa5c76e5ac39ce/docs/experiment-script.md)
- [`/docs/success-metrics.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/2e265e037e51d5da7f4635d425fa5c76e5ac39ce/docs/success-metrics.md)
- [`/docs/feedback-form.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cf45a683964b1f01e2d4478e673bdf35646cf2a4/docs/feedback-form.md)
- [`/docs/weekly-logbook.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cf45a683964b1f01e2d4478e673bdf35646cf2a4/docs/weekly-logbook.md)

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
- **Screenshots:** 
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

- [`/data/validation-results.csv`](https://github.com/Thant198/ICT105-STT-MVP/blob/1fed61068254c3a91583b7e0ed1bb5a716962e17/data/lab08_validation_results.csv)
- [`/docs/customer-validation-summary.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/5ae406c9015238749f93e65c0d87a01f6700bd61/docs/customer-validation-summary.md)
- [`/docs/analytics-insights.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/5ae406c9015238749f93e65c0d87a01f6700bd61/docs/analytics-insights.md)
- [`/docs/weekly-logbook.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/5ae406c9015238749f93e65c0d87a01f6700bd61/docs/weekly-logbook.md)

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

The [`system-requirements.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/7dcc6a9166698b0b797929edf06d3052dfec2b9e/docs/system-requriments.md) document was reviewed during Lab 09 as part of the Responsible IT assessment.

No changes were made to the functional or non-functional requirements because the existing system requirements already matched the current Campus Life Hub prototype. The Lab 09 review focused on privacy, ethical, intellectual property, and security documentation rather than modifying the system requirements.
---

## Team Contributions

| Member | Contribution |
|---------|--------------|
| **Thant Sithu Soe** | Created the Data Inventory and Privacy Review documentation, reviewed the prototype to extract data fields, updated the repository README, and completed the Weekly Logbook. |
| **Tay Za Aung** | Prepared the Legal, Ethical, and Intellectual Property documentation and created the Updated Requirements Note. |
| **Sut Lat Shawng** | Built the Security Risk Check, prepared the Risk Register, and implemented Privacy and Security Mitigations within the prototype. |

## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal

Our goal in Lab 10 is to build the first working version of the Campus Life Hub prototype based on the approved system requirements, user stories, wireframes, technical architecture, and responsible IT design checks completed in previous labs. The prototype demonstrates the core workflow for browsing campus information, managing announcements, and providing a centralized platform for students.

---

### Implementation Approach

- **Platform/tools:** HTML5, CSS3, JavaScript (ES6), Visual Studio Code, GitHub Pages
- **Backend status:** Frontend-only prototype with simulated backend functionality
- **Data storage/simulation:** JavaScript arrays, Local Storage, and mock JSON data
- **Prototype link or folder:** [`/prototype/`](https://github.com/Thant198/ICT105-STT-MVP/tree/7dcc6a9166698b0b797929edf06d3052dfec2b9e/prototype)  
  GitHub Pages: https://thant198.github.io/ICT105-STT-MVP/prototype/

---

### Features Implemented in Sprint 1

| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage | FR-01 | ✅ Complete |[ `/prototype/homepage.html` ](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/homepage.html)|
| Announcement Input Form (Admin) | FR-03 | ✅ Complete | [`/prototype/admin-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/admin-page.html) |
| Announcements Record List | FR-05 | ✅ Complete | [`/prototype/announcements-page.html` ](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/announcements-page.html)|
| Search / Filter | FR-06 | ✅ Complete | [`/prototype/search-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/search-page.html) |
| Project Detail View | FR-07 | ✅ Complete | [`/prototype/projects-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/projects-page.html) |
| Status Tracking | FR-08 | ✅ Complete | [`/prototype/projects-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/prototype/projects-page.html) |
| Admin Management | FR-09 | ✅ Complete |[ `/prototype/admin-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/dd200805809c6fe513bbd13a03741567beb8a3fa/prototype/admin-page.html) |
| Dashboard Summary | FR-12 | ✅ Complete | [`/prototype/dashboard-page.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/dd200805809c6fe513bbd13a03741567beb8a3fa/prototype/dashboard-page.html) |

---

### Screenshots

- **Homepage:** [`/screenshots/home.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/home.png)
- **Input Form:**  [`/screenshots/Admin.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Admin.png)
- **Record List:**[`/screenshots/Announcement.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Announcement.png)
- **Detail View:** [`/screenshots/Project.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Project.png)
- **Dashboard:**[`/screenshots/Dashboard.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Dashboard.png)
- **Search:** [`/screenshots/Search.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Search.png)
- **Admin View:**  [`/screenshots/Admin.png`](https://github.com/Thant198/ICT105-STT-MVP/blob/688125950afb1b3561894c0ed3a1bc4772d12f55/screenshots/Admin.png)
---

### Team Contribution

All group members contributed to the same GitHub repository throughout Sprint 1.

| Member | Contribution |
|---|---|
| **Thant Sithu Soe** | Implemented and reviewed the prototype core UI, verified the Homepage, Announcements, Events, Projects, Dashboard, Search, and Admin screens, updated the README and Weekly Logbook, and prepared implementation evidence. |
| **Tay Za Aung**| Prepared the implementation sprint documentation, reviewed requirements, wireframes, and implementation planning. |
| **Sut Lat Shawng** | Implemented data handling, interaction logic, admin functionality, validation, and basic security improvements for the prototype. |

# Lab 11: MVP Implementation Sprint 2 and Startup Metrics

## Prototype Progress

During Lab 11, the CampusLife Hub prototype was improved by refining the user interface, enhancing navigation, and documenting startup metrics. A dedicated login page was added as the entry point of the prototype, and the original homepage was updated to [`homepage.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/7dcc6a9166698b0b797929edf06d3052dfec2b9e/prototype/homepage.html). The team also improved responsive design, updated prototype screenshots, tested the implemented features, and updated the project documentation.

## Implemented / Improved Features

| Requirement ID | Feature | Status | Evidence |
|---|---|---|---|
| FR-03 | User input and login form validation | Completed | Login page [`index.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/7dcc6a9166698b0b797929edf06d3052dfec2b9e/prototype/index.html) |
| FR-06 | Search and filtering interface | In Progress | Search page prototype |
| FR-08 | Status tracking and information updates | In Progress | Announcements and Events pages |
| FR-12 | Dashboard and startup metrics | Completed | Dashboard page and Power BI dashboard |

## Startup/Product Metrics

The team documented startup metrics using Power BI to evaluate the MVP. The dashboard includes:

- Total announcements
- Total events
- Total projects
- User activity summary
- Visual charts for prototype evaluation

## Prototype Screenshots

Updated screenshots are available in the[ `screenshots/`](https://github.com/Thant198/ICT105-STT-MVP/tree/d58c79df9dfe4b1072d37349039353a2068522b6/screenshots) folder, including:

- Login Page
- Homepage
- Announcements
- Events
- Projects
- Search
- Dashboard
- Admin Page
- Power BI Dashboard

## Member Contributions

| Member | Contribution |
|---|---|
| **Thant Sithu Soe** | Improved the prototype UI, created the login page, updated navigation flow, improved responsiveness, captured screenshots, and updated documentation. |
| **Tay Za Aung** | Reviewed feature implementation, updated the weekly logbook, improved prototype testing, and documented testing results. |
| **Sut Lat Shawn** | Developed the Power BI dashboard, prepared startup metrics, and documented the dashboard results. |

## Remaining Work

Before the final submission, the team will:

- Complete the remaining prototype features.
- Perform final prototype testing.
- Review all functional requirements against the system requirements.
- Update final screenshots and documentation.
- Fix any remaining UI or navigation issues.
- Prepare the final MVP presentation.

## Lab 12 - Landing Page and Digital Go-to-Market

### Landing Page
- Landing page folder/link: [`/landing-page/index.html`](https://thant198.github.io/ICT105-STT-MVP/landing-page/)
- Main CTA: **Try the Demo**
- Prototype/demo link: [(https://thant198.github.io/ICT105-STT-MVP/prototype/)]

### Go-to-Market Plan
- **Target early users:** University students, lecturers, and campus administrators.
- **Selected channels:** GitHub Pages, classroom demonstrations, university social media, and student communities.
- **Main marketing message:** *CampusLife Hub centralizes announcements, events, project resources, and campus information into one easy-to-use platform.*

### Acquisition Metrics
- **Metric 1:** CTA Clicks (Number of users who click **"Try the Demo"**)
- **Metric 2:** Demo Attempts (Number of users who access the prototype)
- **Metric 3:** Conversion Rate (Percentage of visitors who proceed from the landing page to the prototype)

### Screenshots
- Landing page screenshot:[ `/screenshots/landing-page.jpeg`](https://github.com/Thant198/ICT105-STT-MVP/blob/7dcc6a9166698b0b797929edf06d3052dfec2b9e/screenshots/landing-page.png)
- CTA screenshot: [`/screenshots/call-to-action.png`
](https://github.com/Thant198/ICT105-STT-MVP/blob/d58c79df9dfe4b1072d37349039353a2068522b6/screenshots/call-to-action.png)

### Requirement Alignment

The Lab 12 landing page introduces CampusLife Hub by clearly presenting the problem, solution, target users, and key prototype features. The **"Try the Demo"** call-to-action directs users to the prototype login page [`/prototype/index.html`](https://github.com/Thant198/ICT105-STT-MVP/blob/1bdbdd04df59104f03eeed1ef0ed87ca525c58d3/prototype/index.html), allowing them to access the homepage, announcements, events, projects, dashboard, search, and admin modules. This ensures that the landing page accurately represents the implemented prototype and aligns with the project requirements defined in [`system-requirements.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/1bdbdd04df59104f03eeed1ef0ed87ca525c58d3/docs/system-requriments.md).

### Member Contributions

| Member | Contribution | Commit/Issue Evidence |
| --- | --- | --- |
| Thant Sithu Soe | Built the landing page interface, uploaded screenshots, updated the README, and completed the weekly logbook. | Issues **#76**, **#80** |
| Tay Za Aung | Reviewed the prototype value proposition, prepared the go-to-market strategy, and defined acquisition metrics. | Issues **#74**, **#78**, **#79** |
| Sut Lat Shwan | Wrote the landing page content and messaging, and connected the CTA to the working prototype. | Issues **#75**, **#77** |

### Lab 13 Objective

We prepared the final sales scenario, prototype demonstration script, user testing plan, testing results, and final improvement list for CampusLife Hub before the final MVP presentation in Lab 14.

### Files Completed

- [x] [`/docs/sales-scenario.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/sales-scenario.md)
- [x] [`/docs/demo-script.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/demo-script.md)
- [x] [`/docs/user-testing-plan.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/user-testing-plan.md)
- [x] [`/docs/user-testing-results.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/user-testing-results.md)
- [x] [`/docs/final-improvement-list.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/final-improvement-list.md)
- [x] [`/docs/weekly-logbook.md`](https://github.com/Thant198/ICT105-STT-MVP/blob/cade6857a798c98480b34a18acecbb98e251659a/docs/weekly-logbook.md)
- [x] `/screenshots/demo-flow.png`
- [x] `/screenshots/user-testing-evidence.png`

### Prototype / Demo Link

- Landing Page: [`https://thant198.github.io/ICT105-STT-MVP/landing-page/`](https://thant198.github.io/ICT105-STT-MVP/landing-page/)
- Prototype Demo: [`https://thant198.github.io/ICT105-STT-MVP/prototype/`](https://thant198.github.io/ICT105-STT-MVP/prototype/)

### Final Preparation Status

The CampusLife Hub prototype is mostly ready for Lab 14. The main user flow from the landing page to the prototype has been completed, including login, homepage, announcements, events, projects, search, dashboard, and admin pages.

User testing was conducted to evaluate navigation, feature clarity, search usability, dashboard understanding, and the overall user experience. The team recorded the testing results and identified several improvements before the final presentation.

The remaining work includes fixing usability issues, improving unclear buttons or labels, checking all page links, confirming mobile responsiveness, updating screenshots, and rehearsing the final demonstration. After these improvements are completed, the prototype will be ready for the final MVP release and venture pitch in Lab 14.
