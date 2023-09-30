// script.js

// JavaScript code to calculate and display age
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Check if the birthdate for the current year has passed or not
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// Update the age and formatted birthdate on the web page
const birthdateElement = document.getElementById("birthdate");
const ageElement = document.getElementById("age");
const birthdate = new Date("2003-09-12"); // Updated with your birthdate (YYYY-MM-DD)

const formattedBirthdate = birthdate.toLocaleDateString('en-GB'); // 'en-GB' for dd/mm/yyyy format

birthdateElement.textContent = formattedBirthdate; // Display the formatted birthdate
ageElement.textContent = calculateAge(birthdate); // Display the calculated age
