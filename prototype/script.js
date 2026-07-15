/* ==========================================
   Campus Life Hub
   Shared JavaScript
========================================== */

// Sample Announcement Data

let announcements = JSON.parse(localStorage.getItem("announcements")) || [

{
    id:1,
    title:"Semester Registration",
    category:"Academic",
    date:"15 Aug 2026",
    description:"Registration for Semester 2 opens next month."
},

{
    id:2,
    title:"ICT Workshop",
    category:"Workshop",
    date:"22 Aug 2026",
    description:"Hands-on HTML, CSS and JavaScript workshop."
},

{
    id:3,
    title:"Club Recruitment",
    category:"Student Life",
    date:"28 Aug 2026",
    description:"Student clubs are welcoming new members."
}

];

// Save LocalStorage

function saveAnnouncements(){

    localStorage.setItem(
        "announcements",
        JSON.stringify(announcements)
    );

}

// Render Announcement List

function renderAnnouncements(){

    const container =
    document.getElementById("announcementList");

    if(!container) return;

    container.innerHTML="";

    announcements.forEach(item=>{

        container.innerHTML +=`

        <div class="card">

            <h3>${item.title}</h3>

            <p>${item.category}</p>

            <p>${item.date}</p>

            <p>${item.description}</p>

            <button onclick="deleteAnnouncement(${item.id})">
                Delete
            </button>

        </div>

        `;

    });

}

// Add Announcement

function addAnnouncement(){

    const title =
    document.getElementById("title").value;

    const category =
    document.getElementById("category").value;

    const date =
    document.getElementById("date").value;

    const description =
    document.getElementById("description").value;

    if(
        title==="" ||
        category==="" ||
        date===""
    ){

        alert("Please complete all required fields.");

        return;

    }

    announcements.push({

        id:Date.now(),

        title,

        category,

        date,

        description

    });

    saveAnnouncements();

    renderAnnouncements();

    updateDashboard();

    alert("Announcement added successfully.");

}
/* ==========================================
   Delete Announcement
========================================== */

function deleteAnnouncement(id){

    const confirmDelete = confirm(
        "Are you sure you want to delete this announcement?"
    );

    if(!confirmDelete) return;

    announcements = announcements.filter(item => item.id !== id);

    saveAnnouncements();

    renderAnnouncements();

    updateDashboard();

}

/* ==========================================
   Search Announcement
========================================== */

function searchAnnouncement(){

    const keyword =
    document.getElementById("searchInput");

    if(!keyword) return;

    const value =
    keyword.value.toLowerCase();

    const container =
    document.getElementById("announcementList");

    if(!container) return;

    container.innerHTML="";

    announcements

    .filter(item=>

        item.title.toLowerCase().includes(value) ||

        item.category.toLowerCase().includes(value) ||

        item.description.toLowerCase().includes(value)

    )

    .forEach(item=>{

        container.innerHTML +=`

        <div class="card">

            <h3>${item.title}</h3>

            <p>${item.category}</p>

            <p>${item.date}</p>

            <p>${item.description}</p>

            <button onclick="deleteAnnouncement(${item.id})">
                Delete
            </button>

        </div>

        `;

    });

}

/* ==========================================
   Dashboard
========================================== */

function updateDashboard(){

    const totalAnnouncements =
    document.getElementById("totalAnnouncements");

    if(totalAnnouncements){

        totalAnnouncements.textContent =
        announcements.length;

    }

}

/* ==========================================
   Clear Form
========================================== */

function clearForm(){

    if(document.getElementById("title"))
        document.getElementById("title").value="";

    if(document.getElementById("category"))
        document.getElementById("category").value="";

    if(document.getElementById("date"))
        document.getElementById("date").value="";

    if(document.getElementById("description"))
        document.getElementById("description").value="";

}

/* ==========================================
   Initialize
========================================== */

document.addEventListener("DOMContentLoaded",()=>{

    renderAnnouncements();

    updateDashboard();

});
