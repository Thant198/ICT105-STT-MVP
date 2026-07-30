# Final Demo Script

**Project:** CampusLife Hub — Smart Campus Information System  
**Course:** ICT105 Fundamental Technology Entrepreneurship  
**Team:** STT  
**Recommended duration:** 5–7 minutes  
**Target duration:** Approximately 6 minutes  
**Prototype link:** https://thant198.github.io/ICT105-STT-MVP/prototype/

> **Requirement note:** This final script follows the Lab 14 final baseline, where **FR-11** is Dashboard/Summary/Metrics and **FR-12** is Final Prototype Traceability.

---

## 1. Opening — 0:00 to 0:40

### Screen
Login / Entry Screen — `/prototype/index.html`

### Presenter Script

> Good morning. We are Team STT, and our final MVP is **CampusLife Hub**, a Smart Campus Information System for university students, student teams, and campus administrators.
>
> Our customer discovery found that important announcements, events, project information, and deadlines are often scattered across LINE, Facebook, Messenger, email, and other platforms. This makes information difficult to find and can cause students to miss important updates.
>
> CampusLife Hub solves this problem by centralizing campus information in one clear web-based platform.

### What to Show

- Project name
- Login form
- Clear entry point into the system
- Email and password fields

### Requirement Evidence

- **FR-01:** Problem-specific entry/home interface
- **FR-02:** Primary user pathway
- **FR-10:** Input validation and error prevention

---

## 2. User Scenario — 0:40 to 1:00

### Presenter Script

> In this demonstration, a student will log in, review announcements, browse events and projects, search for information, and view the dashboard.
>
> Then an administrator will add a new announcement. We will confirm that the data is validated, saved in local storage, displayed to users, searchable, and included in the dashboard count.

---

## 3. Login and Validation — 1:00 to 1:25

### Screen
Login Screen — `/prototype/index.html`

### Presenter Actions

1. Click **Login** with empty fields.
2. Show that the browser prevents the form from continuing.
3. Enter:
   - Email: `student@rsu.ac.th`
   - Password: `campus123`
4. Click **Login**.

### Presenter Script

> The login screen includes required-field validation. If the user leaves the fields empty, the form prevents submission.
>
> The password field also requires at least six characters. After valid sample information is entered, the user continues to the homepage.
>
> This is a simulated login for the frontend MVP. A production version would use secure authentication and role-based access control.

### Requirement Evidence

- **FR-02:** Primary user pathway
- **FR-03:** User input
- **FR-10:** Required-field and password-length validation

---

## 4. Homepage and Main Navigation — 1:25 to 2:00

### Screen
Homepage — `/prototype/homepage.html`

### Presenter Actions

1. Point to the project title and value proposition.
2. Show the navigation menu:
   - Home
   - Announcements
   - Events
   - Projects
   - Dashboard
   - Search
   - Admin
3. Briefly scroll through:
   - Latest Announcements
   - Upcoming Events
   - Featured Projects
   - Quick Access
   - Campus Summary

### Presenter Script

> The homepage communicates the purpose of CampusLife Hub and gives users direct access to the main modules.
>
> Students can immediately view recent announcements, upcoming events, featured projects, quick-access links, and summary information.
>
> The same navigation design is used across the prototype so users can move through the main workflow without lecturer assistance.

### Requirement Evidence

- **FR-01:** Homepage displays project title, purpose, and main action
- **FR-02:** Complete and consistent user pathway
- **FR-05:** Record previews
- **FR-11:** Summary information

---

## 5. Announcement List and Search — 2:00 to 2:40

### Screen
Announcements — `/prototype/announcements-page.html`

### Presenter Actions

1. Open **Announcements**.
2. Show announcement cards.
3. Search for `ICT`.
4. Clear the box and search for `Academic`.
5. Return the search box to empty.

### Presenter Script

> The Announcements page displays stored or simulated announcement records.
>
> Each record includes a title, category, date, and description. The search function updates the result list while the user types.
>
> For example, searching for “ICT” displays the ICT Workshop, while searching for “Academic” displays records from the academic category.
>
> The prototype uses JavaScript arrays and browser local storage to simulate persistent data handling.

### Requirement Evidence

- **FR-04:** Stored or simulated data
- **FR-05:** View records/list
- **FR-06:** Search and category matching

---

## 6. Events, Projects, Details, and Status — 2:40 to 3:20

### Screens

- Events — `/prototype/events-page.html`
- Projects — `/prototype/projects-page.html`

### Presenter Actions

1. Open **Events**.
2. Point to an event title, date, location, and description.
3. Open **Projects**.
4. Point to project name, course, description, and status.
5. Highlight statuses such as:
   - Planning
   - In Progress
   - Completed

### Presenter Script

> The Events page brings upcoming campus activities into one place and provides essential details such as the date, location, and description.
>
> The Projects page displays student project information and progress status. Users can see whether a project is Planning, In Progress, or Completed.
>
> These screens demonstrate record viewing, detail information, and progress tracking.

### Requirement Evidence

- **FR-05:** View event and project records
- **FR-07:** Detail information
- **FR-08:** Status and progress tracking

---

## 7. Admin Function, Validation, and Storage — 3:20 to 4:35

### Screen
Admin Management — `/prototype/admin-page.html`

### Presenter Actions

#### First: Show validation

1. Click **Add Announcement** without filling the required fields.
2. Show the message:
   - `Please complete all required fields.`

#### Second: Add a valid announcement

3. Enter the following sample data:

| Field | Demo Value |
|---|---|
| Title | Library Maintenance Notice |
| Category | Academic |
| Date | 18 August 2026 |
| Description | The main library will close at 5:00 PM for scheduled maintenance. |

4. Click **Add Announcement**.
5. Show the success message:
   - `Announcement added successfully.`
6. Scroll to **Manage Announcements**.
7. Locate the new announcement.
8. Refresh the page and confirm the record remains visible.

### Presenter Script

> The Admin page demonstrates the manager-side function.
>
> When I submit an empty form, the system detects the missing required information and displays an error message.
>
> I will now enter a new Library Maintenance Notice. After clicking Add Announcement, JavaScript creates the record, saves it to browser local storage, refreshes the record list, and displays confirmation feedback.
>
> After refreshing the page, the announcement remains available. This demonstrates input validation, data submission, simulated storage, persistence, and administrative record management.

### Requirement Evidence

- **FR-03:** User/admin data submission
- **FR-04:** Browser local storage
- **FR-05:** Updated record list
- **FR-09:** Admin/manager function
- **FR-10:** Error prevention and validation

---

## 8. Verify the Student-Side Result — 4:35 to 5:00

### Screen
Announcements — `/prototype/announcements-page.html`

### Presenter Actions

1. Return to **Announcements**.
2. Search for `Library`.
3. Show the newly added announcement.

### Presenter Script

> The administrator’s new announcement is now available on the student-facing announcement page.
>
> Searching for “Library” displays the record immediately. This confirms that the admin workflow is connected to the student workflow and that newly submitted information can be found by users.

### Requirement Evidence

- **FR-02:** End-to-end user pathway
- **FR-04:** Persistent simulated storage
- **FR-05:** Updated record list
- **FR-06:** Newly added record is searchable
- **FR-09:** Admin changes affect the user-facing system

---

## 9. Dashboard and Product Metrics — 5:00 to 5:35

### Screen
Dashboard — `/prototype/dashboard-page.html`

### Presenter Actions

1. Open **Dashboard**.
2. Point to:
   - Total Announcements
   - Upcoming Events
   - Student Projects
   - Active Categories
3. Confirm that Total Announcements reflects the stored announcement count.
4. Show the Recent Activity section.

### Presenter Script

> The dashboard gives users and administrators a quick summary of system activity.
>
> The Total Announcements value is calculated from the current announcement data. The dashboard also summarizes upcoming events, student projects, active categories, and recent activity.
>
> During customer validation, 12 users tested the MVP. The documented task completion rate was 83.3 percent, the average ease-of-use score was 3.83 out of 5, and the average interest level was 4.08 out of 5.
>
> The main issues involved search labels, status layout, and required-form guidance. These findings guided the final improvements.

### Requirement Evidence

- **FR-11:** Dashboard, summary, and product metrics
- **FR-12:** Final prototype evidence is connected to validation and requirements

---

## 10. Data Handling and Technical Explanation — 5:35 to 5:55

### Presenter Script

> The current MVP uses HTML, CSS, and JavaScript. Sample records are stored in JavaScript arrays, while administrator-created announcements are saved in browser local storage.
>
> The prototype uses mock information and avoids unnecessary sensitive personal data. It demonstrates the workflow without claiming to be a production database or secure authentication system.

### Technical Summary

| Area | Current MVP Implementation |
|---|---|
| Interface | HTML and CSS |
| Interaction | JavaScript |
| Sample records | JavaScript arrays |
| New announcement storage | Browser localStorage |
| Search | Client-side keyword matching |
| Dashboard | Client-side summary values |
| Privacy | Mock or non-sensitive demonstration data |
| Hosting | GitHub Pages |

---

## 11. Closing — 5:55 to 6:25

### Presenter Script

> In conclusion, CampusLife Hub addresses the problem of scattered campus information by centralizing announcements, events, projects, search, administration, and summary metrics in one platform.
>
> The final MVP demonstrates a complete pathway from login and information browsing to admin submission, validation, local-storage persistence, search, status tracking, and dashboard reporting.
>
> Future development will include secure authentication, role-based permissions, a cloud database, mobile notifications, global search across every module, and more advanced analytics.
>
> Thank you. We are ready for questions.

---

# 12. Final Walkthrough Table

| Step | Screen / Feature | What to Demonstrate | Requirement ID |
|---:|---|---|---|
| 1 | Login / Entry | Project entry point and validation | FR-01, FR-02, FR-10 |
| 2 | Homepage | Purpose, target users, main navigation, and key information | FR-01, FR-02 |
| 3 | Announcements | View stored announcement records | FR-04, FR-05 |
| 4 | Search | Search records by title, category, or description | FR-06 |
| 5 | Events / Projects | View detail information | FR-07 |
| 6 | Project Status | Show Planning, In Progress, and Completed | FR-08 |
| 7 | Admin Form | Validate and submit a new announcement | FR-03, FR-09, FR-10 |
| 8 | Data Persistence | Refresh and confirm the record remains stored | FR-04 |
| 9 | Student Verification | Search for the newly added record | FR-05, FR-06 |
| 10 | Dashboard | Show totals, summaries, and validation metrics | FR-11 |
| 11 | Traceability | Connect screens, evidence, requirements, and value | FR-12 |

---

# 13. Presenter Preparation Checklist

- [ ] Public prototype link opens successfully.
- [ ] Start from `/prototype/index.html`.
- [ ] Browser JavaScript and local storage are enabled.
- [ ] Login validation works.
- [ ] All navigation links work.
- [ ] Announcement records load.
- [ ] Search filters records correctly.
- [ ] Events and projects display details.
- [ ] Project statuses are visible.
- [ ] Empty Admin form displays an error.
- [ ] Valid Admin submission displays success feedback.
- [ ] New announcement remains after refresh.
- [ ] New announcement appears in student search.
- [ ] Dashboard announcement count is correct.
- [ ] Only mock or non-sensitive data is displayed.
- [ ] Presentation finishes within 5–7 minutes.

---

# 14. GitHub Issue #90 Completion Comment

After uploading this file to `/docs/final-demo-script.md`, add the following comment to Issue #90:

> Completed `/docs/final-demo-script.md`.
>
> The document provides a timed 5–7 minute final pitch walkthrough for CampusLife Hub. It includes the opening, user scenario, login validation, homepage, announcement list, search, events, projects, status tracking, admin submission, localStorage persistence, dashboard metrics, validation findings, technical explanation, closing script, and FR-01 to FR-12 traceability.
>
> The final demo script is ready for the Lab 14 presentation and submission.

Then close Issue #90 as **Completed**.
