# Technical Architecture

## Project Title
Campus Life Hub

## 1. Selected Prototype Platform
- Firebase / Supabase (Database-backed web app utilizing HTML/CSS/JavaScript Frontend)

## 2. Architecture Decision
This platform stack is highly suitable for our project because it provides a realistic, production-ready environment that aligns perfectly with our learning goals as ICT students. Firebase/Supabase provides real-time database capabilities, user authentication, and secure cloud storage without needing a complex custom backend infrastructure. This allows our group to focus heavily on polishing user experience, designing dynamic frontends, and ensuring robust data handling for assignment timelines and dashboard metrics within our semester timeline.

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | The visual layer that students interact with to view deadlines and pin links. | HTML5, CSS3, JavaScript (ES6) | FR-01, FR-02 |
| Data Input Form | Form interface where group leaders or students submit new tasks and resource URLs. | HTML Form with JS Validation | FR-03, FR-10, FR-11 |
| Data Storage | Cloud database to store user accounts, task structures, and shared links securely. | Firebase Firestore / Supabase DB | FR-10 |
| Record List | A dynamic layout displaying all current academic schedules and pinned links. | JavaScript DOM Manipulation | FR-05, FR-06 |
| Detail View | A structured display showing complete resource guidelines and submission deadlines. | JavaScript Dynamic Routing/Rendering | FR-07, FR-08 |
| Admin Function | A protected portal allowing authorized course leaders to edit or delete existing entries. | Role-Based Authorization + Web Form | FR-08, FR-09 |
| Dashboard / Summary | Visual widgets counting overall tasks, active countdowns, and completion progress. | JavaScript Charts / Progress Cards | FR-12 |

## 4. What Will Be Fully Implemented?
- Dynamic User Input Form with real-time data submission to the cloud database.
- Interactive Record List with responsive search keywords and course filtration.
- Real-time cloud storage updates using Firebase/Supabase for storing task records.
- Complete Admin View actions including Row Editing, Update Submissions, and Record Deletion.
- Responsive, synchronized dashboard calculation summarizing active deadlines.

## 5. What Will Be Simulated?
- Advanced User Authentication Roles: Full multi-tier security roles (e.g., Professor vs. Student vs. Guest login) will be simulated using local state mock values rather than building full OAuth system deployment.
- Automated Notification Triggers: Email or system notification alerts for upcoming 24-hour due dates will be simulated visually in the dashboard notifications area.

## 6. Final Prototype Risk
- The Biggest Technical Risk: Complex asynchronous data fetching from the database causing UI rendering delays or broken connections when managing active data lists.
- Risk Mitigation Strategy: Our group will mitigate this technical risk by using reliable, structured query rules, building modular JavaScript functions, and implementing explicit mock local data structures as an immediate fallback backup solution if live database server synchronization fails during presentations.
