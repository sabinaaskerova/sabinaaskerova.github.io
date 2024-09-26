const projects = [
    {
        name: "CNN for Time Series Classification",
        description: "Developed a CNN to classify events in oil well time series data, adapting image-based architectures for sequential data.<br><b>Outcome:</b> Attained best prediction accuracy of 97%, aiding predictive maintenance in the oil and gas industry.",
        githubLink: "https://github.com/sabinaaskerova/TimeCNN-Classification",
        image: "images/TimeCNN-Classification.png",
        technologies: ["Tensorflow", "pandas"],
        dates: "April-May 2024"
    },
    {
        name: "Pptx Translator",
        description: "Developed a web app that translates your presentation files and saves them in the desired language (80-100 slides translated in less than 3 minutes). Used open-source machine translation models. <br>Built with Flask for a simple, intuitive interface and seamless file handling.<br><b>Outcome:</b> A valuable tool for any professionals dealing with translation of their professional presentations.",
        githubLink: "https://github.com/sabinaaskerova/PptxTranslatorApp",
        image: "images/pptx_translator.png",
        technologies: ["Python", "Flask"],
        dates: "July-August 2024"
    },
    {
        name: "Biological data acquisition app",
        description: "Developed a parallel algorithm that searches and processes specific regions in less than 12 hours for more than 2 billion nucleotide sequences (>85K organisms) from Genbank online massive database. \
        <br><b>Outcome:</b> Streamlined data collection, reducing errors in genetic functional regions and saving researchers time thanks to parallel processing.",
        githubLink: "https://github.com/sabinaaskerova/genbank_data",
        image: "images/genbank_data.png",
        technologies: ["PyQt", "concurrent.futures", "biopython"],
        dates: "March-May 2024"
    },
    
    {
        name: "CNN for Text Classification",
        description: "Developed a CNN for news article classification with PyTorch, addressing challenges in language processing and model optimization.<br><b>Outcome:</b> Despite complexity of the task, achieved an accuracy rate of 78%, showcasing a robust model for NLP tasks like sentiment analysis.",
        githubLink: "https://github.com/sabinaaskerova/TAL",
        image: "images/text_classification.png",
        technologies: ["PyTorch"],
        dates: "June 2024"
    },
    {
        name: "Brick Breaker Game",
        description: "Developed a C++/SDL desktop game focused on breaking bricks with a paddle and ball, optimized for smooth performance.<br><b>Outcome:</b> A fun, engaging game that showcases problem-solving and programming skills.",
        githubLink: "https://github.com/sabinaaskerova/brick_breaker",
        image: "images/brick_breaker.png",
        technologies: ["C++", "SDL2"], 
        dates: "March-May 2024"
    }
];


const education = [
    {
        degree: "Master of Science in Artificial Intelligence and Data Science",
        institution: "Paris Dauphine University - PSL (#24 in the QS world University ranking 2024)",
        location: "Paris, France",
        description: "Courses: Optimization, Deep learning for image analysis, LLMs, Reinforcement Learning",
        dates: "September 2024 - Present",
        link: "https://www.masteriasd.eu/",
        ranking_link: "https://www.topuniversities.com/universities/universite-psl"
    },
    {
        degree: "Master of Science in Computer Science (Year 1)",
        institution: "University of Strasbourg",
        location: "Strasbourg, France",
        description: "Courses: ML fundamentals, Statistics, NLP, Unsupervised Learning, Deep Learning and CNNs, Complex Systems, Advanced OOP (C++)\
        <br> Grade : 14.2/20 (B+) (Top 2 of the class)",
        dates: "September 2023 - June 2024"
    },
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Strasbourg",
        location: "Strasbourg, France",
        description: "Courses: System Programming, Probabilities and Statistics, OOP (Java) \
        <br> Grade : 14.5/20 (B+) (Top 10% of the class)",
        dates: "September 2020 - June 2023"
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
        <p class="text-sm"><i>${project.dates}</i></p>
    `;

    projectLink.appendChild(projectDiv);
    return projectLink;
}

function renderEducation(education) {
    const educationDiv = document.createElement("div");
    educationDiv.className = "bg-white p-4 shadow-md rounded-md mb-4";
    educationDiv.innerHTML = `
        <h3 class="text-lg font-bold">${education.degree}</h3>
        <p class="text-sm">${education.institution} </p>
        <p class="text-sm">${education.location}</p>
        ${education.link ? `<a href="${education.link}" target="_blank" rel="noopener noreferrer" class="hover:underline text-sm">About the program</a> |` : ''}
        ${education.ranking_link ? `<a href="${education.ranking_link}" target="_blank" rel="noopener noreferrer" class="hover:underline text-sm">University ranking</a>` : ''}
        
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
