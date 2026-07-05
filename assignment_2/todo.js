let inputs = document.getElementById("inp");
let text = document.querySelector(".texts");
let footer = document.querySelector("footer");

function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function Add() {
    const taskValue = inputs.value.trim();

    if (taskValue === "") {
        alert("Enter your task");
        return;
    }

    const newEl = document.createElement("div");
    newEl.className = "task-item";
    newEl.innerHTML = `
        <button class="task-toggle" type="button" aria-label="Mark as complete">
            <i class="fa-solid fa-circle-check"></i>
        </button>
        <span class="task-text">${escapeHtml(taskValue)}</span>
        <button class="task-delete" type="button" aria-label="Delete task">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    `;

    text.appendChild(newEl);
    inputs.value = "";

    newEl.querySelector(".task-delete").addEventListener("click", () => {
        newEl.remove();
    });

    newEl.querySelector(".task-toggle").addEventListener("click", () => {
        newEl.classList.toggle("completed");
    });
}

inputs.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        Add();
    }
});


if(footer.offsetTop + footer.offsetHeight < window.innerHeight) {
    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.width = "100%";
} else {
    footer.style.position = "static";
}   