# CampusLife Hub — Screen-by-Screen Demo Script

**Project:** CampusLife Hub — Smart Campus Information System  
**Course:** ICT105 Fundamental Technology Entrepreneurship  
**Team:** STT  
**Recommended demo duration:** 5–7 minutes  
**Prototype:** `https://thant198.github.io/ICT105-STT-MVP/prototype/`

---

## 1. Demo Objective

This demonstration shows how CampusLife Hub provides university students with one centralized platform for campus announcements, events, student projects, search, and activity summaries. It also demonstrates how an administrator can publish and manage announcements using client-side data storage.

The walkthrough is mapped directly to the functional requirement IDs used in the project documentation.

---

## 2. Presenter Preparation

Before the presentation:

1. Open the prototype in Google Chrome.
2. Make sure the browser allows JavaScript alerts and local storage.
3. Start from `/prototype/index.html`.
4. Keep the following sample announcement ready:

| Field | Demo Value |
|---|---|
| Title | Library Maintenance Notice |
| Category | Academic |
| Date | 18 August 2026 |
| Description | The main library will close at 5:00 PM for scheduled maintenance. |

5. Confirm that the navigation pages load correctly: Home, Announcements, Events, Projects, Dashboard, Search, and Admin.

---

## 3. Opening — 0:00 to 0:35

### Screen
Login page — `/prototype/index.html`

### Presenter Action
Keep the login page visible while introducing the project.

### Presenter Script

> Good morning. We are Team STT, and our project is **CampusLife Hub**, a Smart Campus Information System for university students, student project teams, class representatives, and campus administrators.
>
> Our customer discovery showed that important announcements, deadlines, project information, and campus activities are often scattered across LINE, Facebook, Messenger, email, and other platforms. This can cause students to miss announcements, forget deadlines, and spend unnecessary time searching for information.
>
> CampusLife Hub solves this problem by bringing important campus information into one clear and easy-to-use web platform.

### Requirements Demonstrated
- **FR-01:** Problem-specific entry/home interface
- **FR-02:** Clear starting point for the primary user pathway

---

## 4. User Scenario — 0:35 to 0:55

### Presenter Script

> For this demonstration, imagine that a student wants to check the latest university announcement, find an event, review a student project, and search for specific information.
>
> After that, an administrator will publish a new announcement. We will confirm that the announcement is validated, saved in local storage, shown in the record list, searchable, and counted on the dashboard.

---

## 5. Screen 1: Login and Form Validation — 0:55 to 1:25

### Screen
Login page — `/prototype/index.html`

### Presenter Actions

1. Click **Login** without entering an email or password.
2. Show that the browser prevents submission because the required fields are empty.
3. Enter a valid sample email, for example `student@rsu.ac.th`.
4. Enter a password of at least six characters, for example `campus123`.
5. Click **Login**.

### Presenter Script

> The prototype begins with a login form. The email and password fields are required, and the password must contain at least six characters.
>
> When I try to continue with incomplete information, the form prevents submission. This demonstrates basic error prevention and input validation.
>
> After valid information is entered, the user can continue to the CampusLife Hub homepage.

### Requirements Demonstrated
- **FR-02:** Primary navigation begins from the login page
- **FR-03:** User input is accepted through a form
- **FR-10:** Required-field and minimum-length validation

### Expected Result
The browser opens `homepage.html`.

---

## 6. Screen 2: Homepage and Main Navigation — 1:25 to 2:00

### Screen
Homepage — `/prototype/homepage.html`

### Presenter Actions

1. Point to the project title and description.
2. Show the **Explore Campus** and **View Events** buttons.
3. Point to the navigation menu.
4. Briefly scroll through:
   - Latest Announcements
   - Upcoming Events
   - Featured Student Projects
   - Quick Access
   - Campus Summary

### Presenter Script

> This is the main CampusLife Hub homepage. It clearly presents the system title, purpose, target information, and main actions.
>
> Students can use the top navigation or the quick-access buttons to open announcements, events, projects, the dashboard, search, or the admin interface.
>
> The homepage also gives users an immediate overview of recent campus information instead of requiring them to check several separate communication platforms.

### Requirements Demonstrated
- **FR-01:** Homepage displays the project identity, purpose, information, and main actions
- **FR-02:** Consistent navigation supports the complete user pathway
- **FR-05:** Important records are previewed on the homepage
- **FR-12:** Summary information is visible

---

## 7. Screen 3: Announcement Record List and Search — 2:00 to 2:40

### Screen
Announcements — `/prototype/announcements-page.html`

### Presenter Actions

1. Click **Announcements**.
2. Show the announcement cards loaded from sample data/local storage.
3. Type `ICT` in the search box.
4. Clear the search box.
5. Type `Academic` to demonstrate category matching.

### Presenter Script

> The Announcements page displays the available announcement records. Each record includes a title, category, date, and description.
>
> The search function updates the results while the user types. It can match the title, category, or description. For example, searching for “ICT” displays the ICT Workshop, and searching for “Academic” displays academic announcements.
>
> This helps students locate important information faster.

### Requirements Demonstrated
- **FR-04:** Announcement records are loaded from simulated/client-side storage
- **FR-05:** Users can view a list of announcement records
- **FR-06:** Users can search records by keyword, category, or description

### Expected Result
Only matching announcement cards remain visible.

---

## 8. Screen 4: Events and Project Information — 2:40 to 3:20

### Screens
- Events — `/prototype/events-page.html`
- Projects — `/prototype/projects-page.html`

### Presenter Actions

1. Click **Events**.
2. Point out the event title, date, location, and description.
3. Click **Projects**.
4. Point out the project name, course, description, and status.
5. Highlight the statuses:
   - In Progress
   - Completed
   - Planning

### Presenter Script

> The Events page centralizes upcoming campus activities and displays useful details such as event dates, locations, and descriptions.
>
> The Projects page displays student project records. Each card provides project details and a visible progress status, such as In Progress, Completed, or Planning.
>
> These screens demonstrate how CampusLife Hub organizes different types of campus information in a consistent format.

### Requirements Demonstrated
- **FR-05:** Users can view event and project records
- **FR-07:** Users can view the important details of a selected information item
- **FR-08:** Project progress is communicated through visible status labels

---

## 9. Screen 5: Global Search — 3:20 to 3:45

### Screen
Search — `/prototype/search-page.html`

### Presenter Actions

1. Click **Search**.
2. Enter `Semester`.
3. Show the matching result.
4. Enter a word that does not match, such as `Parking`.
5. Clear the search field.

### Presenter Script

> The Search page gives users a dedicated place to locate campus information using a keyword.
>
> The current working prototype searches the announcement dataset in real time. A future version can extend the same search logic to events, projects, and additional campus resources.

### Requirements Demonstrated
- **FR-06:** Search and filtering functionality
- **FR-10:** Clear search guidance is provided through labels and placeholder text

### Expected Result
The record list updates immediately based on the entered keyword.

---

## 10. Screen 6: Admin Input, Validation, and Data Storage — 3:45 to 5:00

### Screen
Admin Management — `/prototype/admin-page.html`

### Presenter Actions

#### A. Demonstrate validation

1. Click **Add Announcement** while the required fields are empty.
2. Show the message: **“Please complete all required fields.”**

#### B. Add a valid announcement

3. Enter the following information:
   - **Title:** Library Maintenance Notice
   - **Category:** Academic
   - **Date:** 18 August 2026
   - **Description:** The main library will close at 5:00 PM for scheduled maintenance.
4. Click **Add Announcement**.
5. Show the confirmation message: **“Announcement added successfully.”**
6. Scroll to **Manage Announcements** and locate the new announcement.

### Presenter Script

> The Admin page provides the manager-side function of the prototype.
>
> First, I will submit an empty form. The system detects the missing required fields and displays an error message. This prevents incomplete records from being added.
>
> I will now enter a new announcement. When I click Add Announcement, JavaScript creates a new record, saves it in browser local storage, refreshes the record list, and displays a success message.
>
> The new Library Maintenance Notice now appears in the Manage Announcements section. This demonstrates data submission, validation, simulated storage, user feedback, and administrator management.

### Requirements Demonstrated
- **FR-03:** Administrator submits announcement data
- **FR-04:** Data is saved using browser local storage
- **FR-05:** The submitted record appears in the announcement list
- **FR-09:** Administrator can add, review, search, and delete announcements
- **FR-10:** Empty required fields trigger an error message
- **FR-11:** Successful submission produces confirmation feedback

### Expected Result
The new announcement is displayed and remains available after refreshing the browser.

---

## 11. Screen 7: Verify Persistence and Searchability — 5:00 to 5:25

### Screens
- Announcements
- Search

### Presenter Actions

1. Refresh the browser while on the Admin page.
2. Confirm that the new announcement remains visible.
3. Open **Announcements**.
4. Search for `Library`.
5. Show the new record in the filtered result.

### Presenter Script

> After refreshing the page, the announcement remains available because it was stored in local storage.
>
> I can also open the student-facing Announcements page and search for “Library.” The newly published announcement appears in the results, showing that the admin action is connected to the user-side workflow.

### Requirements Demonstrated
- **FR-02:** Complete admin-to-student user pathway
- **FR-04:** Persistent simulated data storage
- **FR-05:** Updated record list
- **FR-06:** Newly added records are searchable
- **FR-09:** Admin changes affect the information shown to users

---

## 12. Screen 8: Dashboard and Metrics — 5:25 to 5:55

### Screen
Dashboard — `/prototype/dashboard-page.html`

### Presenter Actions

1. Click **Dashboard**.
2. Point to:
   - Total Announcements
   - Upcoming Events
   - Student Projects
   - Active Categories
3. Confirm that **Total Announcements** reflects the current stored announcement count.
4. Briefly show the Recent Activity cards.

### Presenter Script

> The Dashboard summarizes important system information.
>
> The Total Announcements value is calculated from the current announcement data. Because we added a new announcement, the count updates automatically.
>
> The page also summarizes upcoming events, student projects, active categories, and recent activities. This gives users and administrators a quick overview without opening every record page.

### Requirements Demonstrated
- **FR-04:** Dashboard reads current simulated data
- **FR-12:** Dashboard and summary metrics are displayed

> **Note:** The current CampusLife Hub repository uses **FR-12** for the dashboard requirement. Keep this ID consistent with `system-requirements.md` and the project README.

---

## 13. Optional Screen 9: Delete Confirmation — 5:55 to 6:15

Use this step only when time allows.

### Screen
Admin Management — `/prototype/admin-page.html`

### Presenter Actions

1. Return to **Admin**.
2. Click **Delete** on the demonstration announcement.
3. Show the confirmation dialog.
4. Click **Cancel** first to demonstrate prevention.
5. Click **Delete** again and confirm deletion if the demo data needs to be cleaned.

### Presenter Script

> The administrator can also remove an announcement. Before deletion, the system asks for confirmation to reduce accidental data loss.
>
> If the administrator cancels, the record is kept. If the administrator confirms, the record is deleted from local storage and the dashboard count is updated.

### Requirements Demonstrated
- **FR-09:** Administrative record management
- **FR-10:** Confirmation prevents accidental deletion
- **FR-11:** The interface provides action feedback

---

## 14. Evidence and Validation — 6:15 to 6:40

### Presenter Script

> We validated the CampusLife Hub concept with target users.
>
> In the documented validation round, 12 users participated. The task completion rate was 83.3 percent, the average ease-of-use feedback score was 3.83 out of 5, and the average interest level was 4.08 out of 5.
>
> The main usability issues involved search labels, status-tracking layout, and required-form guidance. Based on this evidence, the team improved labels, form validation, navigation, and status communication before the final demonstration.

---

## 15. Closing — 6:40 to 7:00

### Presenter Script

> In conclusion, CampusLife Hub addresses the problem of scattered campus information by centralizing announcements, events, projects, search, administration, and summary metrics in one web-based platform.
>
> The prototype demonstrates a complete pathway from login and information browsing to administrator submission, local-storage persistence, search, and dashboard updates.
>
> The current MVP uses HTML, CSS, JavaScript, mock data, and browser local storage. Future development will include a secure user authentication system, a cloud database, role-based admin access, mobile notifications, expanded global search, and more detailed project and event pages.
>
> Thank you. We are ready for questions.

---

## 16. Requirement-to-Screen Traceability Summary

| Requirement ID | Prototype Evidence | Demonstration Step |
|---|---|---|
| FR-01 | Project-specific homepage and system identity | Opening and Homepage |
| FR-02 | Login-to-home navigation and complete user pathway | Login, Homepage, Admin-to-Announcements |
| FR-03 | Login input and administrator announcement form | Login and Admin |
| FR-04 | JavaScript arrays and browser local storage | Announcements, Admin, Refresh, Dashboard |
| FR-05 | Announcement, event, and project record lists | Announcements, Events, Projects |
| FR-06 | Real-time announcement search | Announcements and Search |
| FR-07 | Detailed event/project information | Events and Projects |
| FR-08 | Project progress statuses | Projects |
| FR-09 | Add, review, search, and delete announcement functions | Admin |
| FR-10 | Required fields, minimum password length, error and confirmation dialogs | Login and Admin |
| FR-11 | Success/error feedback messages | Admin |
| FR-12 | Dashboard and summary metrics | Dashboard |

---

## 17. Demo Completion Checklist

- [ ] Prototype link opens correctly.
- [ ] Login validation works.
- [ ] Homepage and navigation links work.
- [ ] Announcement list loads correctly.
- [ ] Search filters announcement records.
- [ ] Event and project pages display correctly.
- [ ] Project status labels are visible.
- [ ] Empty admin form shows an error.
- [ ] New announcement is added successfully.
- [ ] New announcement remains after refresh.
- [ ] New announcement appears in search.
- [ ] Dashboard announcement count updates.
- [ ] Delete confirmation works.
- [ ] Requirement IDs are mentioned during the presentation.
- [ ] Demo finishes within 5–7 minutes.

---

## 18. GitHub Issue Completion Note

After uploading this file to `/docs/demo-script.md`, add the following comment to Issue #82:

> Completed the screen-by-screen demo script in `/docs/demo-script.md`. The script includes the login flow, homepage, announcement records, search, events, projects, admin input and validation, localStorage data handling, dashboard metrics, validation evidence, closing script, and direct mapping to FR-01 through FR-12.

Then close Issue #82 as **Completed**.
