// Compound Interest Calculator that prompts a user for some inputs
// Finally calculates the compounded interest value
const prompt = require('prompt-sync')()

// temporary data prior to prompting user
// let initialAmount = 20000
// let monthlyContribution = 400
// let numberOfYears = 30
// let interestRate = 10

// [1] define function to calculate final value of compound interest
const compoundInterest = (initialAmount, monthlyContribution, numberOfYears, interestRate) => {
    let total = initialAmount
    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * (100 + interestRate) / 100
    }

    return total.toFixed(2)
}

// calculating regular amount
const calculateRegular = (initialAmount, monthlyContribution, numberOfYears) => {
    let regularValue = initialAmount + monthlyContribution * 12 * numberOfYears
    // console.log(regularValue)
    return regularValue.toFixed(2)
}


// [2] Run function that prompts user to enter all necessary details required to calculate the final amounts
const functionRun = () =>  {
    let initialAmount = parseInt(prompt('What is your initial investment ($)? '))
    let monthlyContribution = parseInt(prompt('What is your monthly contribution ($)? '))
    let numberOfYears = parseInt(prompt('For how many years would you like to compound your investment? '))
    let interestRate = parseInt(prompt('What is your expected interest rate (%) over these years? '))

    printOutput(initialAmount, monthlyContribution, numberOfYears, interestRate)
}


// test run
// console.log(compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate) 
// - calculateRegular(initialAmount, monthlyContribution, numberOfYears))

// printing the output
const printOutput = (initialAmount, monthlyContribution, numberOfYears, interestRate) => {

    let finalValue = compoundInterest(initialAmount, monthlyContribution, numberOfYears, interestRate) // with interest rate
    let valueWithoutCompounding = calculateRegular(initialAmount, monthlyContribution, numberOfYears) // without interest rate

    let summary = `INIT_AMOUNT: ${initialAmount}\nMONTHLY_CONTRIBUTION: ${monthlyContribution}\n
    NUMBER_OF_YEARS: ${numberOfYears}\nINTEREST_RATE: ${interestRate}\n\nFINAL_COMPOUNDED_VALUE: 
    $${finalValue}\nREGULAR_AMOUNT: $${valueWithoutCompounding}\nDIFFERENCE: $${finalValue - valueWithoutCompounding}`

    console.log(summary)
}



functionRun()

