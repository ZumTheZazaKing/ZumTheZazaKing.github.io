//Script for the hamburger menu button and the close button
const hamburgerButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.menu-navbar');
const closeButton = mobileMenu.querySelector('.close');

hamburgerButton.addEventListener('click', () => {

    mobileMenu.style.transform = "translateY(0)";

});

closeButton.addEventListener('click', () => {

    mobileMenu.style.transform = "translateY(-100%)";

});















//Script for the underline of the links in the navigation menu of PC
const navbarButtons = document.querySelectorAll('.navbar .navbarButton');
const mobileNavbarButtons = document.querySelectorAll('.menu-navbar .mobileNavbarButton');

let currentContent = 'HOME';


setInterval(() => {

    switch(currentContent){

        case "HOME":
        case "ABOUT":
        case "PROJECTS":
        case "CONTACT":
            checkWhichButtonShouldUnderline();
            break;

    }

}, 100);

//Function for a repeated process
function checkWhichButtonShouldUnderline(){

    for(var a = 0; a < navbarButtons.length; a++){

        if(navbarButtons[a].innerHTML == currentContent){

            navbarButtons[a].style.borderBottom = "4px solid skyblue";

        } else {

            navbarButtons[a].style.borderBottom = "none";

        }

    }
};
















//Function for a switching content
function switchPages(){

    mobileMenu.style.transform = "translateY(-100%)";

    let previousContent = currentContent;

    currentContent = this.innerHTML;

    let pageToExit = document.querySelector(`.${previousContent}`);

    let pageToEnter = document.querySelector(`.${currentContent}`);


    if(previousContent == currentContent){
        return;
    } else {

        if(previousContent == "HOME" || previousContent == "PROJECTS"){
            pageToExit.style.transform = 'translateX(100%)';

        } else {
            pageToExit.style.transform = 'translateX(-100%)';
        }

        setTimeout(() => {pageToExit.style.display = 'none';}, 700);

        setTimeout(() => {pageToEnter.style.display = 'flex'}, 800);

        setTimeout(() => {pageToEnter.style.transform = 'translateX(0)';}, 900);
    }


}


//Applying the function to the buttons
navbarButtons.forEach(button => button.addEventListener('click', switchPages));
mobileNavbarButtons.forEach(mobileButton => mobileButton.addEventListener('click', switchPages));

















//Script for the social media buttons
const socialImages = document.querySelectorAll('.image-container img');
const socialTexts = document.querySelectorAll(".image-container p");

function sendTo(){


    let subject = this.getAttribute("alt") || this.innerHTML;

    switch(subject){

        case "instagram":
        case "Instagram":
            window.open("https://www.instagram.com/zumthezazaking/");
            break;

        case "github":
        case "Github":
            window.open("https://github.com/ZumTheZazaKing");
            break;

        case "twitter":
        case "Twitter":
            window.open("https://twitter.com/zumthezazaking");
            break;

        case "email":
        case "Email me":
            window.open("mailto:zahidi85543@gmail.com");
            break;
    }

}


//Applying the functions to the social images and links
socialImages.forEach(socialImage => {socialImage.addEventListener('click',sendTo)});
socialTexts.forEach(socialText => {socialText.addEventListener('click', sendTo)})
















//Script for the projects showcase
const beforeButtons = document.querySelectorAll('.PROJECTS .before');
const afterButtons = document.querySelectorAll('.PROJECTS .after');
const projectImage = document.querySelector('.PROJECTS img');
const projectName = document.querySelector('.PROJECTS .projectName');
const projectDesc = document.querySelector('.PROJECTS .projectDesc');
const dots = document.querySelectorAll('.dot');

let projectIndexCount = 0;
let currentDot = 0;

let projectNames = [
    'QTPI Online (Voice Assistant)',
    'Text to Speech',
    'QTPI (Discord Bot)',
    'Hangman Game'
]

let projectImages = [
    'images/qtpi-online.png',
    'images/text2speech.png',
    'images/discordbot.png',
    'images/hangman.png'
]

let projectDescs = [

    'I created a voice assistant because it seemed like a prominent challenge and '+
    'I called the assistant I created QTPI (pronounced cutiepie). At first I did it '+
    'with Python but then after sometime, I decided to put it on the web and I ' +
    'implemented the code into JavaScript. Overall, it was a very intriguing project ' +
    'but I have yet to make it an A.I since I kinda suck at ML... but I\'m still ' +
    'learning!',


    'Basically it takes whatever message you put into the textarea and it\'ll say ' +
    "that message for you, as the name implies, 'Text to Speech'. I made this while " +
    "I was still working on QTPI Online and I managed to figure out how to make the " +
    "computer say stuff and I was like \"Hey! I can make a Text to Speech\". Overall, "+
    "It was a fun project and I really liked messing around with the rate and pitch.",


    "A variation of QTPI, which is specifically used for Discord servers. I made this "+
    "variation of QTPI when I decided to try and make a Discord Bot because it seemed "+
    "pretty cool. It was quite challenging but in the end, with the usage of discord.js "+
    "and repl.it, I managed to make a simple discord bot for moderation and amusement. "+
    "I'm just going to say that making the bot had me read through the discord.js documentation "+
    "multiple times but it was fun. My bot can be found on <a href='https://top.gg/bot/848779367982825482'>top.gg</a>",


    "A simple Hangman game with some horror vibes. This Hangman game takes place in the "+
    "18<sup>th</sup> Century when Hangman wasn't such a game to be made fun about. Practically, "+
    "Hangman was something like a 'second chance' for prisoners on death row to save themselves."+
    "Before they get executed, they request the 'Rite Of Words and Life' from their executioner"+
    "and so the prisoner is given a blank word and they have to try guess what it is, letter by letter"+
    "The amount of chances they have is the amount of legs their chair or stool has. All of that is"+
    "depicted in my version of Hangman. There are 3 difficulties and 3 categories. Try it out "+
    "<a href='https://zumthezazaking.github.io/Hangman/'>here!</a>"

]


function switchProject(num){

    dots[currentDot].classList.remove('active');

    if(this.innerHTML == " &gt; "){
        
        projectIndexCount++;

        if(projectIndexCount == projectNames.length){
            projectIndexCount = 0;
        }

    } else if (this.innerHTML == " &lt; "){

        projectIndexCount--;

        if(projectIndexCount < 0){
            projectIndexCount = projectNames.length - 1;
        }
        
    } else if (num !== false){

        projectIndexCount = num;

    }

    currentDot = projectIndexCount;
    dots[currentDot].classList.add('active');

    projectName.innerHTML = projectNames[projectIndexCount];
    projectImage.src = projectImages[projectIndexCount];
    projectDesc.innerHTML = projectDescs[projectIndexCount];

}


afterButtons.forEach(afterButton => {afterButton.addEventListener('click', switchProject)});
beforeButtons.forEach(beforeButton => {beforeButton.addEventListener('click', switchProject)});
