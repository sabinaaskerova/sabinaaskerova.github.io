const projects = [
    {
        name: "Pptx Translator",
        description: "A web app that translates your presentation files and saves them in the desired language using open-source machine translation models. <br>Built with Flask for a simple, intuitive interface and seamless file handling.<br>Outcome: A valuable tool for multilingual professionals.",
        githubLink: "https://github.com/sabinaaskerova/PptxTranslatorApp",
        image: "images/pptx_translator.png",
        technologies: ["Python", "Flask"]
    },
    {
        name: "Biological data acquisition app",
        description: "Automated retrieval of genetic data from GenBank for biologists, built with PyQt and enhanced by parallel processing. <br>Outcome: Streamlined data collection, reducing errors and saving researchers time.",
        githubLink: "https://github.com/sabinaaskerova/genbank_data",
        image: "images/genbank_data.png",
        technologies: ["PyQt", "concurrent.futures", "biopython"]
    },
    {
        name: "CNN for Time Series Classification",
        description: "Developed a CNN to classify events in oil well time series data, adapting image-based architectures for sequential data.<br>Outcome: Improved accuracy, aiding predictive maintenance in the oil and gas industry.",
        githubLink: "https://github.com/sabinaaskerova/TimeCNN-Classification",
        image: "images/TimeCNN-Classification.png",
        technologies: ["Tensorflow", "pandas"]
    },
    {
        name: "CNN for Text Classification",
        description: "Trained a CNN for news article classification with PyTorch, addressing challenges in language processing and model optimization.<br>Outcome: A robust model for NLP tasks like sentiment analysis.",
        githubLink: "https://github.com/sabinaaskerova/TAL",
        image: "images/text_classification.png",
        technologies: ["PyTorch"]
    },
    {
        name: "Brick Breaker Game",
        description: "Developed a C++/SDL desktop game focused on breaking bricks with a paddle and ball, optimized for smooth performance.<br>Outcome: A fun, engaging game that showcases problem-solving and programming skills.",
        githubLink: "https://github.com/sabinaaskerova/brick_breaker",
        image: "images/brick_breaker.png",
        technologies: ["C++", "SDL2"]
    }
];


const education = [
    {
        degree: "Master of Science in Computer Science (Year 2)",
        institution: "Paris Dauphine University - PSL",
        location: "Paris, France",
        description: "Courses: Optimization, Deep learning for image analysis, LLMs, Reinforcement Learning",
        dates: "2024-Present",
        link: "https://www.masteriasd.eu/"
    },
    {
        degree: "Master of Science in Computer Science (Year 1)",
        institution: "University of Strasbourg",
        location: "Strasbourg, France",
        description: "Courses: ML fundamentals, Statistics, NLP, Unsupervised Learning, Deep Learning and CNNs, Complex Systems, Advanced OOP (C++)",
        dates: "2023-2024"
    },
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Strasbourg",
        location: "Strasbourg, France",
        description: "Courses: System Programming, Probabilities and Statistics, OOP (Java)",
        dates: "2020-2023"
    }
];

const languages = [
    { name: "French", level: "Fluent (DALF C1 diploma 2019)" },
    { name: "English", level: "Fluent" },
    { name: "Kazakh", level: "Native" },
    { name: "Russian", level: "Native" },
    { name: "Korean", level: "Elementary" }
];

const skills = ["Python", "Pytorch", "SQL", "scikit-learn", "TensorFlow", "C++", "R"];

// Function to populate sections
function populateSection(sectionId, items, itemRenderer) {
    const section = document.getElementById(sectionId);
    items.forEach(item => {
        const element = itemRenderer(item);
        section.appendChild(element);
    });
}

function renderProject(project) {
    const projectLink = document.createElement("a");
    projectLink.href = project.githubLink;
    projectLink.target = "_blank";
    projectLink.rel = "noopener noreferrer";
    projectLink.className = "block";

    const projectDiv = document.createElement("div");
    projectDiv.className = "bg-white p-4 shadow-md rounded-md";
    projectDiv.innerHTML = `
        <h3 class="text-lg font-bold text-blue hover:underline">${project.name}</h3>
        ${project.image ? `<img src="${project.image}" alt="${project.name}">` : ''}
        <p class="text-sm mt-2">${project.description}</p>
        <p class="text-sm"><strong>Tools:</strong> ${project.technologies.join(", ")}</p>
    `;

    projectLink.appendChild(projectDiv);
    return projectLink;
}

function renderEducation(education) {
    const educationDiv = document.createElement("div");
    educationDiv.className = "bg-white p-4 shadow-md rounded-md mb-4";
    educationDiv.innerHTML = `
        <h3 class="text-lg font-bold">${education.degree}</h3>
        ${education.link ? `<a href="${education.link}" target="_blank" rel="noopener noreferrer" class="hover:underline text-sm">Learn more</a>` : ''}
        <p class="text-sm">${education.institution}, ${education.location}</p>
        <p class="text-sm">${education.description}</p>
        <p class="text-sm"> ${education.dates}</p>
        
    `;
    return educationDiv;
}

function renderLanguage(language) {
    const languageDiv = document.createElement("div");
    languageDiv.className = "bg-white shadow-md rounded-md text-center";
    languageDiv.innerHTML = `
        <h3 class="text-sm font-bold items">${language.name}</h3>
        <p class="text-sm">${language.level}</p>
    `;
    return languageDiv;
}

function renderSkill(skill) {
    const skillDiv = document.createElement("div");
    skillDiv.className = "bg-white shadow-md rounded-md text-center";
    skillDiv.innerHTML = `
        <h3 class="text-sm font-bold items">${skill}</h3>
    `;
    return skillDiv;
}

document.addEventListener("DOMContentLoaded", () => {
    populateSection("projects", projects, renderProject);
    populateSection("education", education, renderEducation);
    populateSection("languages", languages, renderLanguage);
    populateSection("skills", skills, renderSkill);
});
