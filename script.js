// ==========================================
// PROJECT DATA
// ==========================================

const projects = {

    friday: {
        number: "PROJECT 01",
        name: "FRIDAY AI",
        type: "PERSONAL AI SYSTEM",
        

        description:"A personal desktop AI assistant designed to provide voice interaction, intelligent responses, memory and system automation.",

        github: "https://github.com/abdulamnaser-bit/26-AI-project-2-",

        technologies: [
            "PYTHON",
            "OLLAMA",
            "LLM",
            "NLP",
            "PYTTSX3",
            "PIPER TTS",
            "PYSIDE6"
        ]
    },

    batman: {
        number: "PROJECT 02",
        name: "26 BATMAN EDITION",

        type: "SYSTEM SOFTWARE / DESKTOP ENGINEERING",
        

        description:"A custom Windows shell replacement featuring a futuristic HUD interface, system monitoring, application control and integrated voice-assistant capabilities.",

        github: "https://github.com/abdulamnaser-bit/batman-edition-desktop-project-1-",

        technologies: [
            "PYTHON",
            "PYQT6",
            "WIN32 API",
            "PSUTIL",
            "QTHREAD",
            "WINDOWS"

        ]
    },

    website: {
        number: "PROJECT 03",
        name: "WEBSITE MONITOR",
        type: "SOFTWARE PROJECT",
        

        description:"A full-stack website monitoring dashboard that checks website availability, response time, HTTP status and SSL health while providing watchlist monitoring and live status updates.",
            
        github: "https://github.com/abdulamnaser-bit/website-monitoring-system",

        technologies: [
            "JAVA",
            "SPRING BOOT",
            "POSTGRESQL"
        ]
    }

};

// ==========================================
// NAVIGATION
// ==========================================

const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// ==========================================
// HERO PROJECT BUTTON
// ==========================================

const viewProjectsButton =
    document.querySelector(".project-button");

viewProjectsButton.addEventListener("click", function () {

    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================================
// PROJECT VIEWER
// ==========================================

const projectViewer = document.querySelector("#project-viewer");
const projectClose = document.querySelector("#project-close");

const viewerName = document.querySelector("#viewer-name");
const viewerNumber = document.querySelector("#viewer-number");
const viewerType = document.querySelector("#viewer-type");
const viewerTechnologies = document.querySelector("#viewer-technologies");
const viewerDescription = document.querySelector("#viewer-description");
const viewerSource = document.querySelector("#viewer-source");

// ==========================================
// CLOSE PROJECT VIEWER
// ==========================================

projectClose.addEventListener("click", function () {

    projectViewer.style.display = "none";

});

// CLOSE PROJECT VIEWER WITH ESC KEY
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        projectViewer.style.display = "none";

    }

});

// ==========================================
// OPEN PROJECT
// ==========================================

function openProject(project) {

    viewerNumber.textContent = project.number;

    viewerName.textContent = project.name;

    viewerType.textContent = project.type;

    viewerDescription.textContent = project.description;

    viewerSource.href = project.github;

    viewerTechnologies.innerHTML = "";

    project.technologies.forEach(function (technology) {

        const technologyElement = document.createElement("span");

        technologyElement.textContent = technology;

        viewerTechnologies.appendChild(technologyElement);

    });

    projectViewer.style.display = "flex";

}
const fridayProjectButton =
    document.querySelector("#friday-project");

fridayProjectButton.addEventListener("click", function () {

    openProject(projects.friday);

});
const batmanProjectButton =
    document.querySelector("#batman-project");

batmanProjectButton.addEventListener("click", function () {

    openProject(projects.batman);

});
const websiteProjectButton =
    document.querySelector("#website-project");

websiteProjectButton.addEventListener("click", function () {

    openProject(projects.website);

});

// ==========================================
// ACTIVE NAVIGATION ON SCROLL
// ==========================================

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - 150) {

            currentSection = section.id;

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle =
    document.querySelector("#menu-toggle");

const navMenu =
    document.querySelector("#nav-menu");

menuToggle.addEventListener("click", function () {

    const isOpen =
        navMenu.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});

const mobileLinks =
    document.querySelectorAll("#nav-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation"
        );

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ==========================================
   HANGING CERTIFICATE INTERACTION
   ========================================== */

const certificateViewer =
    document.querySelector("#certificate-viewer");

const certificateClose =
    document.querySelector("#certificate-close");

const modalProvider =
    document.querySelector("#certificate-modal-provider");

const modalNumber =
    document.querySelector("#certificate-modal-number");

const modalTitle =
    document.querySelector("#certificate-modal-title");

const modalDescription =
    document.querySelector("#certificate-modal-description");

const modalDate =
    document.querySelector("#certificate-modal-date");

const modalLink =
    document.querySelector("#certificate-modal-link");

let previouslyFocusedCertificate = null;

document.querySelectorAll(".certificate-card").forEach(function (card) {
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label",
        "View details for " +
        card.querySelector("h3").textContent.trim()
    );

    function openCertificate() {
        previouslyFocusedCertificate = card;

        modalProvider.textContent =
            card.querySelector(".certificate-provider")?.textContent.trim() || "";

        modalNumber.textContent =
            "CERTIFICATE " +
            (card.querySelector(".certificate-number")?.textContent.trim() || "");

        modalTitle.textContent =
            card.querySelector("h3")?.textContent.trim() || "";

        modalDescription.textContent =
            card.querySelector(":scope > p")?.textContent.trim() || "";

        modalDate.textContent =
            card.querySelector(".certificate-date")?.textContent.trim() || "";

        const originalLink = card.querySelector(".certificate-link");

        modalLink.href = originalLink ? originalLink.href : "#";
        modalLink.style.display = originalLink ? "inline-flex" : "none";

        certificateViewer.classList.add("is-open");
        certificateViewer.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        certificateClose.focus();
    }

    card.addEventListener("click", openCertificate);

    card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openCertificate();
        }
    });
});

function closeCertificateViewer() {
    certificateViewer.classList.remove("is-open");
    certificateViewer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (previouslyFocusedCertificate) {
        previouslyFocusedCertificate.focus();
    }
}

certificateClose.addEventListener("click", closeCertificateViewer);

certificateViewer.addEventListener("click", function (event) {
    if (event.target === certificateViewer) {
        closeCertificateViewer();
    }
});

document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        certificateViewer.classList.contains("is-open")
    ) {
        closeCertificateViewer();
    }
});



