# System Requirements Mapping for Prototype

Below is how our Campus Life System will implement each minimum prototype functionality requirement:

| Req ID | Minimum Prototype Functionality | Our System Implementation (What We Will Show) |
| --- | --- | --- |
| FR-01 | Clear problem-specific homepage | Landing Dashboard: Shows "Campus Life Hub" title, targets students/staff, and has a prominent "View Today's Updates" action button. |
| FR-02 | Primary user pathway | User Flow: Student opens hub → views unified calendar → clicks a deadline → opens attached project file repository link. |
| FR-03 | User input feature | Submission Form: Project leaders can submit a new milestone deadline and upload its related Google Drive/GitHub links. |
| FR-04 | Data storage management | Database Simulation: All submitted announcements and deadlines are stored and retrieved using a local JSON file / Firebase. |
| FR-05 | View records / information list | Centralized Feed: A clean list view displaying all upcoming project deadlines and campus event announcements. |
| FR-06 | Search, filter, or category | Filters: Users can filter updates by Category (Exams, Assignments, Club Events) or Search by Course Code. |
| FR-07 | Detail view for each record | Pop-up Detail Window: Clicking a deadline opens a detailed view showing instructions, scoring criteria, and links. |
| FR-08 | Status or progress tracking | Task Status Tags: Each project milestone displays visual status tags: *Pending, In Progress,* or *Submitted*. |
| FR-09 | Admin or manager function | Lecturer/Organizer Panel: Allows authorized teachers or club leaders to approve, edit, or delete posted announcements. |
| FR-10 | Validation & error prevention | Smart Forms: Blank inputs are blocked; the system alerts users if the "Deadline Date" is set in the past. |
| FR-11 | Confirmation message | Success Toast: Pop-up alert saying "Announcement posted successfully!" appears immediately after data submission. |
| FR-12 | Dashboard summary view | Analytics Widgets: A small widget at the top showing: *Total Pending Tasks, Deadlines This Week,* and *New Announcements*. |
| FR-13 | UI consistency | Design System: All screens use a consistent official campus color scheme (Teal/White), standard typography, and top navigation bar. |
| FR-14 | Mobile-friendly design | Responsive Layout: The interface smoothly adapts to both laptop screens and mobile phones (since students check updates on mobile). |
| FR-15 | Privacy & data handling | Anonymized Data: No student IDs or passwords collected. Only displays standard public campus roles (e.g., First-year student). |
| FR-16 | Final prototype traceability | Feature Mapping: Every screen is mapped directly back to Lab 04 MVP features (F01: Dashboard, F02: Calendar, F03: Links Repo). |

---

## Minimum Technical Requirement (Summary)
To build this prototype successfully by the end of the semester, our team will use:
- Frontend UI: Figma (for high-fidelity design prototyping) or HTML/CSS/JS for responsive views.
- Backend/Storage Simulation: Local Storage / JSON file array to handle data records dynamically.
- Traceability: A final review to ensure 100% agreement between the code/Figma screens and the Lab 04 MoSCoW feature priority list.
