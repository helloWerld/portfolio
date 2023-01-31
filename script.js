
// TODO: DIV Slide Animations


//Open Education Information
const viewEduc = document.querySelector('.view-educ');
const education = document.querySelector('.education');
viewEduc.addEventListener('click', () => {
    if (education.style.display === 'inline') {
        education.style.display = 'none';
        viewEduc.innerText = 'View My Education';
    } else {
        education.style.display = 'inline';
        viewEduc.innerText = 'Hide My Education';
    }
});

//Contact Me
function sendEmail() {
    console.log('clicked');
    window.location.href = "mailto:trzruss@me.com";
}

function callPhone() {
    console.log('clicked');
    window.location.href = "tel:6092172562";
}

//Email Button
const emailBtn = document.getElementById("email-btn");
emailBtn.addEventListener("mouseover", () => {
    emailBtn.innerText = "trzruss@me.com";
});

emailBtn.addEventListener("mouseout", () => {
    emailBtn.innerText = "Email Me";
});

//Phone Button
const phoneBtn = document.getElementById("phone-btn");
phoneBtn.addEventListener("mouseover", () => {
    phoneBtn.innerText = "609-217-2562";
});

phoneBtn.addEventListener("mouseout", () => {
    phoneBtn.innerText = "Call Me";
});

//Portfolio Link Click
let portfolio = {
    "placeholder": "https://github.com/helloWerld",
    "weatherApp": "https://github.com/helloWerld/CurrentWeather",
    "clickPromo": "https://github.com/helloWerld/click-promo",
    "colorCasino": "https://github.com/helloWerld/colorcasino",
    "codeGen": "https://github.com/helloWerld/codegen",
    "viralVideos": "https://github.com/helloWerld/viralvideos",
    "turtle": "https://github.com/helloWerld/turdle",
    "coinGenie": "https://github.com/dannynow6/Team_Project_WebDev"
};

function portfolioClick(appName) {
    window.open(portfolio[appName]);
};

//Resume Link Click
const resume = document.querySelector('.resume');
resume.addEventListener('click', () => {
    window.open("/Russell Trzaska - Software Web Developer", '_blank');
});

//LinkedIn Link Click
const linkedin = document.querySelector('.linkedin');
linkedin.addEventListener('click', () => {
    window.open('https://linkedin.com/in/russelltrzaska', '_blank');
});

//Github Link Click
const github = document.querySelector('.github');
github.addEventListener('click', () => {
    window.open('https://github.com/helloWerld', '_blank');
});