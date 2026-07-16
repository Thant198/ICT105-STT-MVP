"use strict";

/* ==============================
   VALIDATION DATA
============================== */

const validationData = [
    {
        id: "T01",
        date: "2026-07-20",
        role: "Student",
        device: "Mobile",
        task: "Submit Assignment",
        requirement: "FR-03",
        completed: true,
        timeSeconds: 130,
        feedback: 5,
        interest: 5,
        issue: "None",
        usefulFeature: "Assignment Tracker",
        decision: "Validated"
    },
    {
        id: "T02",
        date: "2026-07-20",
        role: "Student",
        device: "Laptop",
        task: "Search Assignment",
        requirement: "FR-06",
        completed: true,
        timeSeconds: 165,
        feedback: 4,
        interest: 4,
        issue: "Search Filter",
        usefulFeature: "Search Feature",
        decision: "Partial"
    },
    {
        id: "T03",
        date: "2026-07-20",
        role: "Student",
        device: "Mobile",
        task: "View Task Detail",
        requirement: "FR-07",
        completed: false,
        timeSeconds: 110,
        feedback: 4,
        interest: 3,
        issue: "Status Colour",
        usefulFeature: "Task Detail View",
        decision: "Revise"
    },
    {
        id: "T04",
        date: "2026-07-20",
        role: "Teacher",
        device: "Laptop",
        task: "Create Task",
        requirement: "FR-03",
        completed: true,
        timeSeconds: 200,
        feedback: 5,
        interest: 5,
        issue: "None",
        usefulFeature: "Dashboard",
        decision: "Validated"
    },
    {
        id: "T05",
        date: "2026-07-21",
        role: "Student",
        device: "Mobile",
        task: "Submit Assignment",
        requirement: "FR-03",
        completed: true,
        timeSeconds: 150,
        feedback: 4,
        interest: 4,
        issue: "Submit Button",
        usefulFeature: "Assignment Tracker",
        decision: "Validated"
    },
    {
        id: "T06",
        date: "2026-07-21",
        role: "Student",
        device: "Laptop",
        task: "View Dashboard",
        requirement: "FR-10",
        completed: true,
        timeSeconds: 90,
        feedback: 4,
        interest: 4,
        issue: "Dashboard Layout",
        usefulFeature: "Dashboard",
        decision: "Validated"
    },
    {
        id: "T07",
        date: "2026-07-21",
        role: "Teacher",
        device: "Laptop",
        task: "Search Assignment",
        requirement: "FR-06",
        completed: true,
        timeSeconds: 135,
        feedback: 4,
        interest: 4,
        issue: "Navigation Labels",
        usefulFeature: "Search Feature",
        decision: "Validated"
    },
    {
        id: "T08",
        date: "2026-07-21",
        role: "Student",
        device: "Mobile",
        task: "View Task Detail",
        requirement: "FR-07",
        completed: true,
        timeSeconds: 85,
        feedback: 4,
        interest: 4,
        issue: "Required Fields",
        usefulFeature: "Task Detail View",
        decision: "Partial"
    },
    {
        id: "T09",
        date: "2026-07-22",
        role: "Student",
        device: "Laptop",
        task: "View Dashboard",
        requirement: "FR-10",
        completed: true,
        timeSeconds: 170,
        feedback: 5,
        interest: 5,
        issue: "None",
        usefulFeature: "Dashboard",
        decision: "Validated"
    },
    {
        id: "T10",
        date: "2026-07-22",
        role: "Teacher",
        device: "Laptop",
        task: "Create Task",
        requirement: "FR-10",
        completed: true,
        timeSeconds: 190,
        feedback: 4,
        interest: 4,
        issue: "None",
        usefulFeature: "Dashboard",
        decision: "Validated"
    },
    {
        id: "T11",
        date: "2026-07-22",
        role: "Student",
        device: "Mobile",
        task: "Submit Assignment",
        requirement: "FR-03",
        completed: true,
        timeSeconds: 115,
        feedback: 4,
        interest: 4,
        issue: "Submit Button",
        usefulFeature: "Assignment Tracker",
        decision: "Validated"
    },
    {
        id: "T12",
        date: "2026-07-22",
        role: "Student",
        device: "Mobile",
        task: "Search Assignment",
        requirement: "FR-06",
        completed: false,
        timeSeconds: 240,
        feedback: 4,
        interest: 3,
        issue: "Search Filter",
        usefulFeature: "Search Feature",
        decision: "Revise"
    }
];

/* ==============================
   DOM ELEMENTS
============================== */

const roleFilter = document.getElementById("roleFilter");
const deviceFilter = document.getElementById("deviceFilter");
const taskFilter = document.getElementById("taskFilter");

const requirementFilter =
    document.getElementById("requirementFilter");

const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

const resetFilters =
    document.getElementById("resetFilters");

const resultsTableBody =
    document.getElementById("resultsTableBody");

const successRateValue =
    document.getElementById("successRateValue");

const successRateText =
    document.getElementById("successRateText");

const feedbackValue =
    document.getElementById("feedbackValue");

const interestValue =
    document.getElementById("interestValue");

const completionTimeValue =
    document.getElementById("completionTimeValue");

const headerParticipants =
    document.getElementById("headerParticipants");

const visibleRows =
    document.getElementById("visibleRows");

/* ==============================
   CHART REFERENCES
============================== */

let confusionChart;
let featureChart;
let decisionChart;
let requirementChart;
let scoreChart;

/* ==============================
   HELPER FUNCTIONS
============================== */

function average(values) {
    if (values.length === 0) {
        return 0;
    }

    const total = values.reduce(
        (sum, value) => sum + value,
        0
    );

    return total / values.length;
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds <= 0) {
        return "0s";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);

    if (minutes === 0) {
        return `${remainingSeconds}s`;
    }

    return `${minutes}m ${remainingSeconds}s`;
}

function countBy(items, keySelector) {
    return items.reduce((result, item) => {
        const key = keySelector(item);

        result[key] = (result[key] || 0) + 1;

        return result;
    }, {});
}

function percentage(value, total) {
    if (total === 0) {
        return 0;
    }

    return (value / total) * 100;
}

/* ==============================
   FILTER DATA
============================== */

function getFilteredData() {
    const selectedRole = roleFilter.value;
    const selectedDevice = deviceFilter.value;
    const selectedTask = taskFilter.value;

    const selectedRequirement =
        requirementFilter.value;

    const start = startDate.value
        ? new Date(`${startDate.value}T00:00:00`)
        : null;

    const end = endDate.value
        ? new Date(`${endDate.value}T23:59:59`)
        : null;

    return validationData.filter((item) => {
        const itemDate =
            new Date(`${item.date}T12:00:00`);

        const matchesRole =
            selectedRole === "All" ||
            item.role === selectedRole;

        const matchesDevice =
            selectedDevice === "All" ||
            item.device === selectedDevice;

        const matchesTask =
            selectedTask === "All" ||
            item.task === selectedTask;

        const matchesRequirement =
            selectedRequirement === "All" ||
            item.requirement === selectedRequirement;

        const matchesStart =
            !start || itemDate >= start;

        const matchesEnd =
            !end || itemDate <= end;

        return (
            matchesRole &&
            matchesDevice &&
            matchesTask &&
            matchesRequirement &&
            matchesStart &&
            matchesEnd
        );
    });
}

/* ==============================
   KPI CALCULATIONS
============================== */

function updateKpis(data) {
    const total = data.length;

    const completed =
        data.filter((item) => item.completed).length;

    const successRate =
        percentage(completed, total);

    const feedbackAverage =
        average(data.map((item) => item.feedback));

    const interestAverage =
        average(data.map((item) => item.interest));

    const completionAverage =
        average(
            data.map((item) => item.timeSeconds)
        );

    headerParticipants.textContent = total;

    successRateValue.textContent =
        `${successRate.toFixed(1)}%`;

    successRateText.textContent =
        `${completed} of ${total} Completed`;

    feedbackValue.textContent =
        feedbackAverage.toFixed(2);

    interestValue.textContent =
        interestAverage.toFixed(2);

    completionTimeValue.textContent =
        formatTime(completionAverage);

    visibleRows.textContent =
        `${total} record${total === 1 ? "" : "s"}`;
}

/* ==============================
   TABLE
============================== */

function renderTable(data) {
    resultsTableBody.innerHTML = "";

    if (data.length === 0) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td colspan="10">
                No validation records match the selected filters.
            </td>
        `;

        resultsTableBody.appendChild(row);
        return;
    }

    data.forEach((item) => {
        const row = document.createElement("tr");

        const completionClass =
            item.completed
                ? "status-completed"
                : "status-incomplete";

        const completionText =
            item.completed
                ? "● Yes"
                : "● No";

        let decisionClass = "decision-partial";

        if (item.decision === "Validated") {
            decisionClass = "decision-validated";
        }

        if (item.decision === "Revise") {
            decisionClass = "decision-revision";
        }

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.role}</td>
            <td>${item.device}</td>
            <td>${item.task}</td>

            <td>
                <span class="status-badge ${completionClass}">
                    ${completionText}
                </span>
            </td>

            <td>${formatTime(item.timeSeconds)}</td>
            <td>${item.feedback}</td>
            <td>${item.interest}</td>
            <td>${item.issue}</td>

            <td class="${decisionClass}">
                ● ${item.decision}
            </td>
        `;

        resultsTableBody.appendChild(row);
    });
}

/* ==============================
   CHART DEFAULTS
============================== */

Chart.defaults.font.family =
    'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif';

Chart.defaults.color = "#344158";

const gridColor = "rgba(119, 132, 155, 0.18)";

/* ==============================
   DESTROY OLD CHARTS
============================== */

function destroyCharts() {
    [
        confusionChart,
        featureChart,
        decisionChart,
        requirementChart,
        scoreChart
    ].forEach((chart) => {
        if (chart) {
            chart.destroy();
        }
    });
}

/* ==============================
   CONFUSION CHART
============================== */

function createConfusionChart(data) {
    const counts = countBy(
        data.filter((item) => item.issue !== "None"),
        (item) => item.issue
    );

    const entries = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

    const labels =
        entries.length > 0
            ? entries.map(([label]) => label)
            : ["No Confusion"];

    const values =
        entries.length > 0
            ? entries.map(([, value]) => value)
            : [0];

    confusionChart = new Chart(
        document.getElementById("confusionChart"),
        {
            type: "bar",

            data: {
                labels,

                datasets: [
                    {
                        label: "Participants",
                        data: values,
                        backgroundColor: "#2f75da",
                        borderRadius: 2
                    }
                ]
            },

            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        },
                        grid: {
                            color: gridColor
                        }
                    },

                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        }
    );
}

/* ==============================
   FEATURE CHART
============================== */

function createFeatureChart(data) {
    const counts = countBy(
        data,
        (item) => item.usefulFeature
    );

    const entries = Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);

    featureChart = new Chart(
        document.getElementById("featureChart"),
        {
            type: "bar",

            data: {
                labels:
                    entries.map(([label]) => label),

                datasets: [
                    {
                        label: "Participants",
                        data:
                            entries.map(([, value]) => value),
                        backgroundColor: "#2da55d",
                        borderRadius: 3,
                        barPercentage: 0.58
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },

                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        },
                        grid: {
                            color: gridColor
                        }
                    }
                }
            }
        }
    );
}

/* ==============================
   DECISION CHART
============================== */

function createDecisionChart(data) {
    const counts = countBy(
        data,
        (item) => item.decision
    );

    const labels = [
        "Validated",
        "Partial",
        "Revise"
    ];

    const values = labels.map(
        (label) => counts[label] || 0
    );

    decisionChart = new Chart(
        document.getElementById("decisionChart"),
        {
            type: "doughnut",

            data: {
                labels: [
                    "Validated",
                    "Partial",
                    "Needs Revision"
                ],

                datasets: [
                    {
                        data: values,

                        backgroundColor: [
                            "#2da55d",
                            "#f7ad12",
                            "#d93030"
                        ],

                        borderWidth: 2,
                        borderColor: "#ffffff"
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "52%",

                plugins: {
                    legend: {
                        position: "right",

                        labels: {
                            usePointStyle: true,
                            boxWidth: 10
                        }
                    }
                }
            }
        }
    );
}

/* ==============================
   REQUIREMENT CHART
============================== */

function createRequirementChart(data) {
    const requirements = [
        "FR-03",
        "FR-06",
        "FR-07",
        "FR-08",
        "FR-10"
    ];

    const values = requirements.map(
        (requirement) => {
            const requirementItems =
                data.filter(
                    (item) =>
                        item.requirement === requirement
                );

            const completed =
                requirementItems.filter(
                    (item) => item.completed
                ).length;

            return percentage(
                completed,
                requirementItems.length
            );
        }
    );

    requirementChart = new Chart(
        document.getElementById("requirementChart"),
        {
            type: "bar",

            data: {
                labels: requirements,

                datasets: [
                    {
                        label: "Success Rate",
                        data: values,
                        backgroundColor: "#8b57c7",
                        borderRadius: 3,
                        barPercentage: 0.55
                    }
                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    },

                    tooltip: {
                        callbacks: {
                            label(context) {
                                return `${context.raw.toFixed(1)}%`;
                            }
                        }
                    }
                },

                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },

                    y: {
                        beginAtZero: true,
                        max: 100,

                        ticks: {
                            callback(value) {
                                return `${value}%`;
                            }
                        },

                        grid: {
                            color: gridColor
                        }
                    }
                }
            }
        }
    );
}

/* ==============================
   SCORE CHART
============================== */

function createScoreChart(data) {
    const feedback =
        average(data.map((item) => item.feedback));

    const interest =
        average(data.map((item) => item.interest));

    const successRate =
        percentage(
            data.filter((item) => item.completed).length,
            data.length
        ) / 20;

    const navigation =
        Math.max(1, feedback - 0.25);

    const overall =
        average([
            feedback,
            interest,
            successRate
        ]);

    scoreChart = new Chart(
        document.getElementById("scoreChart"),
        {
            type: "bar",

            data: {
                labels: [
                    "Ease of Use",
                    "Usefulness",
                    "Navigation",
                    "Interest",
                    "Overall Experience"
                ],

                datasets: [
                    {
                        label: "Average Score",

                        data: [
                            feedback,
                            feedback,
                            navigation,
                            interest,
                            overall
                        ],

                        backgroundColor: "#8b57c7",
                        borderRadius: 3,
                        barPercentage: 0.55
                    }
                ]
            },

            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    x: {
                        beginAtZero: true,
                        max: 5,

                        ticks: {
                            stepSize: 1
                        },

                        grid: {
                            color: gridColor
                        }
                    },

                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        }
    );
}

/* ==============================
   UPDATE DASHBOARD
============================== */

function updateDashboard() {
    const filteredData = getFilteredData();

    updateKpis(filteredData);
    renderTable(filteredData);

    destroyCharts();

    createConfusionChart(filteredData);
    createFeatureChart(filteredData);
    createDecisionChart(filteredData);
    createRequirementChart(filteredData);
    createScoreChart(filteredData);
}

/* ==============================
   EVENTS
============================== */

[
    roleFilter,
    deviceFilter,
    taskFilter,
    requirementFilter,
    startDate,
    endDate
].forEach((element) => {
    element.addEventListener(
        "change",
        updateDashboard
    );
});

resetFilters.addEventListener(
    "click",
    () => {
        roleFilter.value = "All";
        deviceFilter.value = "All";
        taskFilter.value = "All";
        requirementFilter.value = "All";

        startDate.value = "2026-06-01";
        endDate.value = "2026-07-31";

        updateDashboard();
    }
);

/* ==============================
   INITIALIZE
============================== */

window.addEventListener(
    "DOMContentLoaded",
    updateDashboard
);
