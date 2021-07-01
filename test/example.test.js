// IMPORT MODULES under test here:
// import { example } from '../example.js';

import didUserWin from '../utils.js';

const test = QUnit.test;

test('does rock beat scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does rock beat paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does scissors beat paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does rock and rock draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does rock lose to paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does paper lose to scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('does scissors lose to rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});