const passwordInput = document.getElementById('passwordInput');
const passwordFeedback = document.getElementById('passwordFeedback');

const passwordLengthCheck = document.getElementById('passwordLengthCheck');
const passwordUppercaseCheck = document.getElementById('passwordUppercaseCheck');
const passwordLowercaseCheck = document.getElementById('passwordLowercaseCheck');
const passwordNumberCheck = document.getElementById('passwordNumberCheck');
const passwordSpecialCharCheck = document.getElementById('passwordSpecialCharCheck');
const passwordPresidentVicePresidentCheck = document.getElementById('passwordPresidentVicePresidentCheck');
const passwordElementSymbolCheck = document.getElementById('passwordElementSymbolCheck');
const passwordUtopiaLeaderCheck = document.getElementById('passwordUtopiaLeaderCheck');

const vicePresidents = [
    // ... the array of U.S. Vice Presidents ...
];

const elementsWithAtomicNumberAbove110 = [
    'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'
];

function resetCheckmarks() {
    const checkmarks = document.querySelectorAll('.checkmark');
    checkmarks.forEach(checkmark => {
        checkmark.style.visibility = 'hidden';
    });
}

function checkPassword() {
    const passwordAndNames = passwordInput.value.trim();
    const hyphenIndex = passwordAndNames.indexOf('-');

    // Define your password requirements here
    const lengthRequirement = 101; // Password length requirement

    // Reset checkmarks visibility
    resetCheckmarks();

    // Check if the password contains the name of a U.S. President and the corresponding Vice President
    const hasPresidentVicePresidentNames = hyphenIndex !== -1;
    const password = passwordAndNames.substring(0, hyphenIndex).trim();
    const president = passwordAndNames.substring(hyphenIndex + 1).trim().split('-')[0];
    const vicePresident = passwordAndNames.substring(hyphenIndex + 1).trim().split('-')[1];

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    const hasPresidentName = president !== '' && passwordAndNames.toLowerCase().includes(president.toLowerCase());
    const presidentIndex = vicePresidents.findIndex(vp => vp.toLowerCase() === president.toLowerCase());
    const correspondingVicePresident = presidentIndex !== -1 ? vicePresidents[presidentIndex + 1] : '';
    const hasCorrespondingVicePresident = vicePresident.toLowerCase() === correspondingVicePresident.toLowerCase();

    // Check if the password contains the symbol of an element with an Atomic Number greater than 110
    const hasElementSymbol = elementsWithAtomicNumberAbove110.some(symbol => password.includes(symbol));

    // Check if the password contains the correct answer for the utopia leader
    const utopiaLeaderAnswer = 'Snell';
    const hasUtopiaLeaderAnswer = password.toLowerCase().includes(utopiaLeaderAnswer.toLowerCase());

    // Update the checkmarks visibility
    passwordLengthCheck.style.visibility = passwordAndNames.length === lengthRequirement ? 'visible' : 'hidden';
    passwordUppercaseCheck.style.visibility = hasUppercase ? 'visible' : 'hidden';
    passwordLowercaseCheck.style.visibility = hasLowercase ? 'visible' : 'hidden';
    passwordNumberCheck.style.visibility = hasNumber ? 'visible' : 'hidden';
    passwordSpecialCharCheck.style.visibility = hasSpecialChar ? 'visible' : 'hidden';
    passwordPresidentVicePresidentCheck.style.visibility = hasPresidentVicePresidentNames && hasPresidentName && hasCorrespondingVicePresident
        ? 'visible'
        : 'hidden';
    passwordElementSymbolCheck.style.visibility = hasElementSymbol ? 'visible' : 'hidden';
    passwordUtopiaLeaderCheck.style.visibility = hasUtopiaLeaderAnswer ? 'visible' : 'hidden';

    // Calculate the overall progress
    const progressMeter = document.getElementById('passwordProgress');
    const requirementsMet = [passwordAndNames.length === lengthRequirement, hasUppercase, hasLowercase, hasNumber, hasSpecialChar, hasPresidentVicePresidentNames && hasPresidentName && hasCorrespondingVicePresident, hasElementSymbol, hasUtopiaLeaderAnswer];
    const requirementsCount = requirementsMet.filter((req) => req).length;
    progressMeter.value = requirementsCount;

    // Check if the password meets all the requirements
    if (requirementsCount === requirementsMet.length) {
        passwordFeedback.textContent = 'Password is strong and meets all requirements.';
    } else {
        passwordFeedback.textContent = 'Password does not meet all the requirements.';
    }
}

// Add event listener to check the password on input
passwordInput.addEventListener('input', checkPassword);
