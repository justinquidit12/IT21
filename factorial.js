// console input 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainMenu() {
  console.clear();
  console.log('--------------------------');
  console.log('Factorial Application');
  console.log('1. Say Hello');
  console.log('2. Factorial');
  console.log('3. Exit Application');
  console.log('--------------------------');

  rl.question('Enter your choice (1-3): ', choice => {
    const c = choice.trim();
    if (c === '1') {
      sayHello();
    } else if (c === '2') {
      computeFactorial();
    } else if (c === '3') {
      exitProgram();
    } else {
      console.log('Invalid Choice. Please Try Again');
      // re-show menu
      setTimeout(mainMenu, 0);
    }
  });
}

function sayHello() {
  console.log('\nHello\n');
  backToMenu();
}

function computeFactorial() {
  console.log('\n--- Factorial ---');

  rl.question('Please enter a non-negative integer: ', numStr => {
    const input = numStr.trim();

    // accept only digits (no decimals, no negative sign)
    if (!/^\d+$/.test(input)) {
      console.log('Please enter a non-negative integer');
      backToMenu();
      return;
    }

    // use BigInt so large factorials are computed exactly
    const n = BigInt(input);
    let fact = 1n;
    for (let i = 1n; i <= n; i++) {
      fact *= i;
    }

    console.log(`The factorial of ${input} is ${fact.toString()}`);
    backToMenu();
  });
}

function exitProgram() {
  console.log('\nExiting Application');
  rl.close();
  process.exit(0);
}

function backToMenu() {
  console.log('\n--------------');
  console.log('1. Back to menu');
  console.log('2. Exit');

  rl.question('What would you like to do next? (1-2) ', backToMenuChoice => {
    const c = backToMenuChoice.trim();
    if (c === '1') {
      mainMenu();
    } else if (c === '2') {
      exitProgram();
    } else {
      console.log('Invalid Choice. Please Try Again!');
      // re-prompt the backToMenu choices
      setTimeout(backToMenu, 0);
    }
  });
}

mainMenu();
