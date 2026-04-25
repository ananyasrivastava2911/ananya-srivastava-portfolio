document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let valid = true;

    if (name.value === "") {
        alert("Name required");
        valid = false;
    }

    if (!email.value.includes("@")) {
        alert("Valid email required");
        valid = false;
    }

    if (message.value.length < 5) {
        alert("Message too short");
        valid = false;
    }

    if (valid) {
        alert("Form submitted!");
    }
});

document.getElementById("themeToggle").onclick = function() {
    document.body.classList.toggle("dark-mode");
};


let text = "Welcome to My Portfolio";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typingText").innerHTML += text[i];
        i++;
        setTimeout(typing, 100);
    }
}
typing();

let btn = document.getElementById("scrollTop");

window.onscroll = function() {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// FILTER PROJECTS
let buttons = document.querySelectorAll(".filter-btn");
let projects = document.querySelectorAll(".project");

buttons.forEach(button => {
    button.onclick = function() {
        let filter = button.getAttribute("data-filter");

        projects.forEach(project => {
            if (filter === "all" || project.classList.contains(filter)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    };
});