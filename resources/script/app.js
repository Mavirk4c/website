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

const nameInputErrorMessageEmtpy = "Please enter a name" + "\n";
const emailInputErrorMessageNotvalid = "Please enter a valid e-mail" + "\n";

class Email {
    constructor(name, email, message) {
        this._id = crypto.randomUUID();
        this._timeStamp = new Date();
        this._name = name;
        this._email = email;
        this._message = message;
    }

    static sendEmail(obj) {
       const json = JSON.stringify(obj);
       console.log(json);
    }
}   


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
 * @param {HTMLelement} formElement
 * @param {string} errorMessage 
 */
 function inputError(formElement, errorMessage) {
    formElement.classList.add("input-error")
};

/**
 * 
 * @param {HTMLelement} formElement 
 */
function removeInputErrorClass(formElement) {
    formElement.classList.remove("input-error")
};

/**
 * 
 * @param {HTMLelement} formElement 
 */
function setSuccesBorder(formElement) {
    formElement.classList.add("succes");
};

function removeSuccesBorder(formElement) {
    formElement.classList.remove("succes");
};

function checkEmail() {
    if(emailInput.validity.typeMismatch || emailInput.value === "") {
        emailInput.setCustomValidity("Please enter a valid E-Mail");
        emailInput.reportValidity();
        removeSuccesBorder(emailInput);
        inputError(emailInput, emailInputErrorMessageNotvalid);
    } else {
        emailInput.setCustomValidity("");
        removeInputErrorClass(emailInput);
        setSuccesBorder(emailInput);

        return true;
    }
};

function checkName() {
    if(nameInput.value === "") {
        nameInput.setCustomValidity("Please enter your name");
        nameInput.reportValidity();
        removeSuccesBorder(nameInput);
        inputError(nameInput, nameInputErrorMessageEmtpy);
    } else {
        nameInput.setCustomValidity("");
        setSuccesBorder(nameInput);
        return true;
    }
};

function removeContentFromContactForm() {
    nameInput.value = "";
    emailInput.value = "";
    textMessage.value = "";
};

// **** EventListener for nav-bar ****
window.addEventListener("resize", checkOffsetTop);
window.addEventListener("scroll", setHeaderSticky);
window.addEventListener("scroll", addMarginToAboutTitle);


// **** EventListener for contact-form ****
nameInput.addEventListener("input", () => {
    checkName();
});
emailInput.addEventListener("input", () => {
    checkEmail();
});

inputFieldName.addEventListener("input", () => {
    removeInputErrorClass(nameInput);
    removeInputErrorClass(emailInput);
});

inputFieldEmail.addEventListener("input", () => {
    removeInputErrorClass(nameInput);
    removeInputErrorClass(emailInput);
});

/*
check for corrent inserts:
=> true: create Email object, and convert to JSON
=> false: error-message for user.
*/
sendButton.addEventListener("click", () => {
    if(checkName() == true && checkEmail() == true) {
        alert("Thank you for your message");
        Email.sendEmail(new Email(
            nameInput.value,
            emailInput.value,
            textMessage.value
        ))
        removeContentFromContactForm();
        removeSuccesBorder(nameInput);
        removeSuccesBorder(emailInput);
    } else {
        checkName();
        checkEmail();
    }
});
