import { details } from "./details.js";

document.getElementById('sign-up').addEventListener('click', submit);
document.getElementsByClassName("hamburger")[0].addEventListener('click',  toggleMenu);
  
let allValid = true;  // Reset the flag at the beginning

function validation(){
    const names = ['fullname', 'contact', 'resident', 'email', 'date', 'gurdian', 'parent_number' ];

    names.forEach(function(name){
        const input = document.getElementById(name);
        const error = document.getElementById(`${name}-error`);
        if (!input.value) {
            error.style.display = "block";
            allValid = false;
        } else {
            error.style.display = "none";
        }
    });
    check_if_its_number();
    lessnumber();
    validateEmail(); 
    validateGender();
    
    if (allValid) {
        alert("You have created an account");
    }
    return allValid;
}

function check_if_its_number(){
    const num = document.getElementById('contact').value;
    const error = document.getElementById('number-error');
    const numRegex = /^[0-9]{10}$/;

    if (!numRegex.test(num)) {
        error.style.display = "block";
        allValid = false;
    } else {
        error.style.display = "none";
    }
}

function lessnumber() {
    const num = document.getElementById('contact').value;
    const lesserror = document.getElementById('less-number-error');

    if (num.length !== 10 ) { 
        lesserror.style.display = "block";
        allValid = false;
    } else {
        lesserror.style.display = "none";
    }
}

function toggleMenu(){
    const nav_link = document.getElementById('nav-link');
    if (nav_link.style.display === 'grid') {
        nav_link.style.display = 'none';
    } else {
        nav_link.style.display = 'grid';
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        emailError.innerText = "Please enter a valid email address.";
        allValid = false;
    }
}

function validateGender() {
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (!genderInput) {
        alert("Please select a gender.");
        allValid = false;
    }
}

function submit() {
    console.log("fuction submit")
    const isValid = validation();
    if (!isValid) {
        return;
    }

    const fullname = document.getElementById('fullname').value;
    const contact = document.getElementById('contact').value;
    const resident = document.getElementById('resident').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const occupation = document.getElementById('Occupation').value;
    const status = document.getElementById('status').value;
    const gurdian = document.getElementById('gurdian').value;
    const parent_number = document.getElementById('parent_number').value;

    const userdetails = {
        [email]: {
            fullname: fullname,
            contact: contact,
            resident: resident,
            date: date,
            gender: gender,
            status: status,
            occupation: occupation,
            gurdian: gurdian,
            parent_number: parent_number
        }
    };

    details.push(userdetails);
}
