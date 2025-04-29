// Compound Interest Calculator that prompts a user for some inputs
// Finally calculates the compounded interest value

/* -----------------------------------------------

// [●] Written in JavaScript with NodeJS \\

const prompt = require('prompt-sync')()


// [1] define function to calculate final value of compound interest \\
const compoundInterest = (initialAmount, monthlyContribution, numberOfYears, interestRate) => {
    let total = initialAmount
    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * (100 + interestRate) / 100
    }

    return total.toFixed(2)
}

// [2] calculating regular amount
const calculateRegular = (initialAmount, monthlyContribution, numberOfYears) => {
    let regularValue = initialAmount + monthlyContribution * 12 * numberOfYears
    // console.log(regularValue)
    return regularValue.toFixed(2)
}


// [3] Run function that prompts user to enter all necessary details required to calculate the final amounts
const functionRun = () =>  {
    let initialAmount = parseInt(prompt('What is your initial investment ($)? '))
    let monthlyContribution = parseInt(prompt('What is your monthly contribution ($)? '))
    let numberOfYears = parseInt(prompt('For how many years would you like to compound your investment? '))
    let interestRate = parseInt(prompt('What is your expected interest rate (%) over these years? '))

    printOutput(initialAmount, monthlyContribution, numberOfYears, interestRate)
}



// [4] printing the output
const printOutput = (initialAmount, monthlyContribution, numberOfYears, interestRate) => {

    let finalValue = compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate) // with interest rate
    let valueWithoutCompounding = calculateRegular(initialAmount, monthlyContribution, numberOfYears) // without interest rate

    let summary = `INIT_AMOUNT: ${initialAmount}\nMONTHLY_CONTRIBUTION: ${monthlyContribution}\n
    NUMBER_OF_YEARS: ${numberOfYears}\nINTEREST_RATE: ${interestRate}\n\nFINAL_COMPOUNDED_VALUE: 
    $${finalValue}\nREGULAR_AMOUNT: $${valueWithoutCompounding}\nDIFFERENCE: $${finalValue - valueWithoutCompounding}`

    console.log(summary)
}



functionRun()

----------------------------------- */

// [●] Written in JavaScript for The Frontend \\

// Compound Interest Calculator for Frontend

// [1] Define function to calculate final value of compound interest
const compoundInterest = (initialAmount, monthlyContribution, numberOfYears, interestRate) => {
    let total = initialAmount;
    let annualContribution = monthlyContribution * 12;

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution;
        total = total * (1 + interestRate / 100);
    }

    return total.toFixed(2);
};

// [2] Calculate regular (non-compounded) amount
const calculateRegular = (initialAmount, monthlyContribution, numberOfYears) => {
    let regularValue = initialAmount + monthlyContribution * 12 * numberOfYears;
    return regularValue.toFixed(2);
};

// [3] Handling form submission
document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    // Fetch values from input fields
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
    const numberOfYears = parseFloat(document.getElementById('numberOfYears').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    // Calculate results
    const finalValue = compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate);
    const valueWithoutCompounding = calculateRegular(initialAmount, monthlyContribution, numberOfYears);

    // Prepare output
    const summary = `
      <strong>Results:</strong><br><br>
      Initial Investment: $${initialAmount}<br>
      Monthly Contribution: $${monthlyContribution}<br>
      Number of Years: ${numberOfYears}<br>
      Interest Rate: ${interestRate}%<br><br>
      <strong>Final Compounded Value:</strong> $${finalValue}<br>
      <strong>Regular Savings Without Interest:</strong> $${valueWithoutCompounding}<br>
      <strong>Difference:</strong> $${(finalValue - valueWithoutCompounding).toFixed(2)}
    `;

    // Display output to the page
    document.getElementById('output').innerHTML = summary;
});
