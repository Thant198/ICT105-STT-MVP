# Data Structure

## Project Title
Campus Life Hub

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Stores student accounts, profiles, and dashboard preferences. | Student ID, Name, Email, Department |
| Tasks | Stores academic assignments, exams, and project milestones. | Task ID, Course Code, Title, Due Date, Status |
| PinnedLinks | Stores shared study resources, GitHub links, and drive URLs. | Link ID, Task ID, URL, Description, Added By |

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | student_id | Text/ID | Yes | 6601234 | Must be a unique 7-digit student ID number. | Yes (Search by ID) |
| Users | name | Text | Yes | Nico | Characters only, maximum 50 characters. | No |
| Tasks | task_id | Text/ID | Yes | T001 | Unique value starting with 'T' followed by 3 digits. | Yes (Search by ID) |
| Tasks | course_code | Text | Yes | ICT105 | Must match approved campus course codes (e.g., ICT105, CT110). | Yes (Filter by Course) |
| Tasks | task_title | Text | Yes | Lab 05 Wireframe | Maximum 100 characters. | Yes (Search by Title) |
| Tasks | due_date | Date | Yes | 2026-07-15 | YYYY-MM-DD format, must be a future date. | Yes (Filter by Date) |
| Tasks | status | Text/List | Yes | Active | Must be one of: Active, Pending, Completed, Archived. | Yes (Filter by Status) |
| PinnedLinks | link_id | Text/ID | Yes | L001 | Unique value starting with 'L' followed by 3 digits. | No |
| PinnedLinks | url | Text/URL | Yes | https://github.com | Must be a valid HTTPS web address URL format. | No |

## 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Active | The academic task or assignment is currently ongoing and needs attention. | Student Admin / Group Leader |
| Pending | The task is created but waiting for submission verification or approval. | Student Admin / Group Leader |
| Completed | The assignment or project milestone has been successfully submitted. | Student Admin / Group Leader |
| Archived | Past deadlines or old tasks that are saved for history reference only. | Student Admin / Group Leader |

## 4. Sample Records
Our comprehensive sample dataset is linked and fully structured in our repository at:
📂 /data/sample-records.csv

## 5. Data Privacy Note
To protect student privacy, Campus Life Hub will strictly follow these data rules:
1. No Sensitive Data: The platform will NOT collect personal legal records, passwords, or personal financial details.
2. Anonymization: All sample user accounts, emails, and names used in the prototype are completely fictional (dummy text) to prevent exposing real student details.
3. Internal Scope: Access to assignment data and shared links is limited to verified university domain accounts only.
