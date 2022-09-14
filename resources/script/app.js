const header = document.getElementById("section-header-wrapper");
const aboutTitle = document.getElementById("about");
let sticky = header.offsetTop;

const emailInput = document.getElementById("email-input");
const nameInput = document.getElementById("name-input");
const textMessage = document.getElementById("text-input");
const inputFieldName = document.getElementsByTagName("input")[0];
const inputFieldEmail = document.getElementsByTagName("input")[1];
const sendButton = document.getElementById('button-send');
const inputBoxName = document.getElementsByClassName("input-wrapper")[0];
const inputBoxEmail = document.getElementsByClassName("input-wrapper")[1];

let errorMessages = [];
const nameInputErrorMessageEmtpy = "Please enter a name" + "\n";
const emailInputErrorMessageEmpty = "Please enter an e-mail" + "\n";
const emailInputErrorMessageNotvalid = "Please enter a valid e-mail" + "\n";


function setHeaderSticky() {
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

function addMarginToAboutTitle() {
    if(window.scrollY > sticky) {
        aboutTitle.classList.add("about-container")
    } else {
        aboutTitle.classList.remove("about-container")
    }
};

//ensure to have the corrrect value for -sticky- even when window-size is changed without refreshing
function checkOffsetTop() {
    sticky = header.offsetTop;
};


//** functions for contact-form validation **

/**
 * 
 * @param {DOM} formElement
 * @param {string} errorMessage 
 */
 function inputError(formElement, errorMessage) {
    formElement.classList.add("input-error")
    errorMessages.push(errorMessage);
}
/**
 * 
 * @param {DOM} formElement 
 */
function removeInputErrorClass(formElement) {
    console.log("key-event!");
    formElement.classList.remove("input-error")
}

function checkName() { 
    const name = nameInput.value;
    if(name === "") {
        inputError(nameInput, nameInputErrorMessageEmtpy);
    } else {
        console.log(name);
    }    
}

function checkEmail() {
    const email = emailInput.value;
    if(email === "") {
        inputError(emailInput, emailInputErrorMessageEmpty);
    } else if (!email.includes("@")) {
        inputError(emailInput, emailInputErrorMessageNotvalid);
    }
     else {
        console.log(email);
    }
}

function checkContactFormInput() {
    checkName();
    checkEmail();
    
    if(errorMessages = []) {
        return true;
    } else {
        alert(errorMessages);
        return false;
    }
}


// EventListener for Nav-Bar
window.addEventListener("resize", checkOffsetTop);
window.addEventListener("scroll", setHeaderSticky);
window.addEventListener("scroll", addMarginToAboutTitle);

// EventListener for Contact-Form
sendButton.addEventListener("click", checkContactFormInput);
inputFieldName.addEventListener("keydown", function() {removeInputErrorClass(nameInput)});
inputFieldName.addEventListener("input", removeInputErrorClass(emailInput));
inputFieldEmail.addEventListener("input", removeInputErrorClass(nameInput));
inputFieldEmail.addEventListener("input", removeInputErrorClass(emailInput));

