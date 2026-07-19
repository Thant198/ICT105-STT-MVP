"use strict";

const STORAGE = {
  assignments: "campusLife.assignments.v1",
  links: "campusLife.links.v1",
  role: "campusLife.demoRole.v1",
  activity: "campusLife.lastActivity.v1"
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ["application/pdf", "image/png", "image/jpeg"];
const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
let submittingAssignment = false;
let submittingLink = false;

const $ = (selector) => document.querySelector(selector);

function safeParse(value, fallback) {
  try { return JSON.parse(value) ?? fallback; } catch { return fallback; }
}

function readList(key) {
  const data = safeParse(localStorage.getItem(key), []);
  return Array.isArray(data) ? data : [];
}

function writeList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function sanitizeText(value, maxLength = 300) {
  return String(value ?? "")
    .replace(/[<>]/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function createTextCell(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { toast.hidden = true; }, 2800);
}

function showError(element, message) {
  element.textContent = message;
  element.hidden = false;
}

function clearError(element) {
  element.textContent = "";
  element.hidden = true;
}

function getRole() {
  return localStorage.getItem(STORAGE.role) === "admin" ? "admin" : "student";
}

function isAdmin() {
  return getRole() === "admin";
}

function maskOwner(owner) {
  const safe = sanitizeText(owner, 30);
  if (safe.length <= 2) return "••";
  return `${safe.slice(0, 2)}${"•".repeat(Math.min(6, safe.length - 2))}`;
}

function validateHttpsUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:";
  } catch {
    return false;
  }
}

function validateAttachment(file) {
  if (!file) return { ok: true };
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { ok: false, message: "Only PDF, PNG, JPG, or JPEG files are allowed." };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { ok: false, message: "The selected file is larger than 5 MB." };
  }
  return { ok: true };
}

function containsSensitivePattern(text) {
  const phoneLike = /(?:\+?\d[\s-]?){8,}/;
  const passwordLike = /password\s*[:=]/i;
  return phoneLike.test(text) || passwordLike.test(text);
}

function updateRoleUI() {
  const role = getRole();
  $("#roleSelect").value = role;
  $("#adminPanel").hidden = role !== "admin";
  renderAssignments();
  renderLinks();
  showToast(`Demo role changed to ${role}.`);
}

function renderAssignments() {
  const rows = $("#assignmentRows");
  rows.replaceChildren();
  const assignments = readList(STORAGE.assignments);

  if (assignments.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 7;
    td.textContent = "No assignment records yet.";
    tr.append(td);
    rows.append(tr);
  }

  assignments.forEach((item) => {
    const tr = document.createElement("tr");
    tr.append(createTextCell(item.title));
    tr.append(createTextCell(item.course));
    tr.append(createTextCell(item.dueDate));
    tr.append(createTextCell(item.priority));

    const statusTd = document.createElement("td");
    if (isAdmin()) {
      const select = document.createElement("select");
      select.className = "status-select";
      ["Pending", "In Progress", "Completed"].forEach((status) => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = status;
        option.selected = item.status === status;
        select.append(option);
      });
      select.addEventListener("change", () => updateAssignmentStatus(item.id, select.value));
      statusTd.append(select);
    } else {
      statusTd.textContent = item.status;
    }
    tr.append(statusTd);
    tr.append(createTextCell(maskOwner(item.owner)));

    const actionsTd = document.createElement("td");
    const actions = document.createElement("div");
    actions.className = "row-actions";
    if (isAdmin()) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "small-btn danger";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => deleteAssignment(item.id));
      actions.append(remove);
    } else {
      const protectedText = document.createElement("span");
      protectedText.textContent = "Admin only";
      protectedText.setAttribute("aria-label", "Actions restricted to administrator");
      actions.append(protectedText);
    }
    actionsTd.append(actions);
    tr.append(actionsTd);
    rows.append(tr);
  });

  updateMetrics(assignments, readList(STORAGE.links));
}

function renderLinks() {
  const container = $("#linkCards");
  container.replaceChildren();
  const links = readList(STORAGE.links);

  if (links.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No pinned links yet.";
    container.append(p);
  }

  links.forEach((item) => {
    const card = document.createElement("article");
    card.className = "link-card";
    const title = document.createElement("h3");
    title.textContent = item.title;
    const anchor = document.createElement("a");
    anchor.href = item.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = item.url;
    card.append(title, anchor);

    if (isAdmin()) {
      const actions = document.createElement("div");
      actions.className = "row-actions";
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "small-btn danger";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => deleteLink(item.id));
      actions.append(remove);
      card.append(actions);
    }
    container.append(card);
  });

  updateMetrics(readList(STORAGE.assignments), links);
}

function updateMetrics(assignments, links) {
  const today = new Date();
  const week = new Date(today);
  week.setDate(today.getDate() + 7);
  const dueSoon = assignments.filter((item) => {
    const date = new Date(`${item.dueDate}T23:59:59`);
    return item.status !== "Completed" && date >= today && date <= week;
  }).length;
  $("#totalAssignments").textContent = assignments.length;
  $("#dueSoon").textContent = dueSoon;
  $("#completedCount").textContent = assignments.filter((item) => item.status === "Completed").length;
  $("#linkCount").textContent = links.length;
}

function updateAssignmentStatus(id, status) {
  if (!isAdmin()) {
    showToast("Unauthorized action blocked.");
    return;
  }
  const allowed = ["Pending", "In Progress", "Completed"];
  if (!allowed.includes(status)) return;
  const assignments = readList(STORAGE.assignments).map((item) => item.id === id ? { ...item, status } : item);
  writeList(STORAGE.assignments, assignments);
  renderAssignments();
  showToast("Status updated securely.");
}

function deleteAssignment(id) {
  if (!isAdmin()) {
    showToast("Unauthorized deletion blocked.");
    return;
  }
  if (!window.confirm("Delete this assignment record? This cannot be undone.")) return;
  writeList(STORAGE.assignments, readList(STORAGE.assignments).filter((item) => item.id !== id));
  renderAssignments();
  showToast("Assignment deleted.");
}

function deleteLink(id) {
  if (!isAdmin()) {
    showToast("Unauthorized deletion blocked.");
    return;
  }
  if (!window.confirm("Delete this pinned link?")) return;
  writeList(STORAGE.links, readList(STORAGE.links).filter((item) => item.id !== id));
  renderLinks();
  showToast("Pinned link deleted.");
}

function handleAssignmentSubmit(event) {
  event.preventDefault();
  const error = $("#assignmentError");
  clearError(error);
  if (submittingAssignment) return;

  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    showError(error, "Please complete all required fields using the requested format.");
    return;
  }

  const fileResult = validateAttachment($("#attachment").files[0]);
  if (!fileResult.ok) {
    showError(error, fileResult.message);
    return;
  }

  const notes = sanitizeText($("#notes").value, 300);
  if (containsSensitivePattern(notes)) {
    showError(error, "Possible sensitive information detected. Remove phone numbers or passwords before saving.");
    return;
  }

  submittingAssignment = true;
  $("#assignmentSubmit").disabled = true;

  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    owner: sanitizeText($("#owner").value, 30),
    title: sanitizeText($("#title").value, 80),
    course: sanitizeText($("#course").value, 10).toUpperCase(),
    dueDate: $("#dueDate").value,
    priority: $("#priority").value,
    notes,
    attachmentName: $("#attachment").files[0] ? sanitizeText($("#attachment").files[0].name, 100) : "",
    status: "Pending",
    createdAt: new Date().toISOString()
  };

  const assignments = readList(STORAGE.assignments);
  assignments.push(record);
  writeList(STORAGE.assignments, assignments);
  form.reset();
  $("#noteCount").textContent = "0";
  renderAssignments();
  showToast("Assignment saved using minimum necessary data.");
  window.setTimeout(() => {
    submittingAssignment = false;
    $("#assignmentSubmit").disabled = false;
  }, 700);
}

function handleLinkSubmit(event) {
  event.preventDefault();
  const error = $("#linkError");
  clearError(error);
  if (submittingLink) return;
  const form = event.currentTarget;
  if (!form.checkValidity()) {
    form.reportValidity();
    showError(error, "Complete the title, HTTPS URL, and consent confirmation.");
    return;
  }
  const url = $("#linkUrl").value.trim();
  if (!validateHttpsUrl(url)) {
    showError(error, "Only secure HTTPS links are allowed.");
    return;
  }
  submittingLink = true;
  $("#linkSubmit").disabled = true;
  const links = readList(STORAGE.links);
  links.push({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
    title: sanitizeText($("#linkTitle").value, 50),
    url
  });
  writeList(STORAGE.links, links);
  form.reset();
  renderLinks();
  showToast("Secure link pinned.");
  window.setTimeout(() => {
    submittingLink = false;
    $("#linkSubmit").disabled = false;
  }, 700);
}

function clearPrototypeData() {
  if (!window.confirm("Clear all Campus Life prototype data stored in this browser?")) return;
  localStorage.removeItem(STORAGE.assignments);
  localStorage.removeItem(STORAGE.links);
  renderAssignments();
  renderLinks();
  showToast("Prototype data cleared.");
}

function exportMaskedData() {
  if (!isAdmin()) {
    showToast("Unauthorized export blocked.");
    return;
  }
  const payload = {
    exportedAt: new Date().toISOString(),
    notice: "Masked prototype data for ICT105 educational evidence only.",
    assignments: readList(STORAGE.assignments).map(({ owner, notes, ...item }) => ({
      ...item,
      owner: maskOwner(owner),
      notes: notes ? "[redacted from export]" : ""
    })),
    links: readList(STORAGE.links)
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "campus-life-masked-export.json";
  anchor.click();
  URL.revokeObjectURL(url);
  showToast("Masked data export created.");
}

function logout() {
  if (!window.confirm("Log out of the prototype session?")) return;
  localStorage.removeItem(STORAGE.role);
  localStorage.removeItem(STORAGE.activity);
  $("#roleSelect").value = "student";
  updateRoleUI();
  showToast("Logged out. Demo data remains in this browser until cleared.");
}

function recordActivity() {
  localStorage.setItem(STORAGE.activity, String(Date.now()));
}

function enforceSessionTimeout() {
  const last = Number(localStorage.getItem(STORAGE.activity) || Date.now());
  if (Date.now() - last > SESSION_TIMEOUT_MS) {
    localStorage.removeItem(STORAGE.role);
    recordActivity();
    $("#roleSelect").value = "student";
    updateRoleUI();
    window.alert("Session expired after 30 minutes of inactivity. Demo role was reset to Student.");
  }
}

function initialize() {
  if (!localStorage.getItem(STORAGE.role)) localStorage.setItem(STORAGE.role, "student");
  recordActivity();
  $("#assignmentForm").addEventListener("submit", handleAssignmentSubmit);
  $("#linkForm").addEventListener("submit", handleLinkSubmit);
  $("#notes").addEventListener("input", (event) => { $("#noteCount").textContent = event.target.value.length; });
  $("#roleSelect").addEventListener("change", (event) => {
    localStorage.setItem(STORAGE.role, event.target.value === "admin" ? "admin" : "student");
    updateRoleUI();
  });
  $("#clearDataBtn").addEventListener("click", clearPrototypeData);
  $("#exportBtn").addEventListener("click", exportMaskedData);
  $("#logoutBtn").addEventListener("click", logout);
  ["click", "keydown", "touchstart"].forEach((name) => document.addEventListener(name, recordActivity, { passive: true }));
  window.setInterval(enforceSessionTimeout, 60 * 1000);
  updateRoleUI();
}

document.addEventListener("DOMContentLoaded", initialize);
