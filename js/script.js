
const projects = [
    {
        name: "Biological data acquisition app",
        description: "A desktop app downloads the genetic data for each organism with the GenBank massive online database API. The parallelism is ensured with concurrent.futures and threading libraries in python. The user interface was developed using PyQt.",
        githubLink: "https://github.com/sabinaaskerova/genbank_data",
        image: "images/genbank_data.png",
        technologies: ["PyQt", "concurrent.futures", "biopython"]
    },
    {
        name: "CNN for Time Series Classification",
        description: "I transformed the time series data and developed an effective CNN for classifying the type of events that can happen in an oil well Tensorflow and pandas.",
        githubLink: "https://github.com/sabinaaskerova/TimeCNN-Classification",
        image: "images/TimeCNN-Classification.png",
        technologies: ["Tensorflow", "pandas"]
    },
    {
        name: "CNN for Text Classification",
        description: "Trained a CNN for news article classification with PyTorch.\
      You can consult my findings in the 'cnn.ipynb' notebook on the repository.",
        githubLink: "https://github.com/sabinaaskerova/TAL",
        image: "images/text_classification.png",
        technologies: ["PyTorch"]
    },
    {
        name: "Brick Breaker Game",
        description: "An interactive desktop game using SDL graphic library developed in C++.An interactive desktop game. The objective of the game is to break all the bricks in a brick grid using a ball controlled by a paddle.SDL graphic library was used for the development of the interface.",
        githubLink: "https://github.com/sabinaaskerova/brick_breaker",
        image: "images/brick_breaker.png",
        technologies: ["C++", "SDL2"]
    },
    {
        name: "Pptx Translator",
        description: "A web app that translates your presentation files easily and saves them in the desired language.",
        githubLink: "https://github.com/sabinaaskerova/PptxTranslatorApp",
        image: "images/pptx_translator.png",
        technologies: ["Python", "Flask"]
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
