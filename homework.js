// EPISODE 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict); 
// MISS SCARLET - declareMurderer uses scenario.murderer

// EPISODE 2

const murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict); 
// PROFESSOR PLUM - const values can not be reasigned, so changeMurder would throw an error

// EPISODE 3

let murderer = 'Professor Plum';

const declareMurderer = function () {
    let murderer = 'Mrs. Peacock';
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);
// Mrs. Peacock - calling the function would use a new murderer variable in scope and return Mrs Peacock

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// Professor Plum - top murder variable unchanged.

// EPISODE 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function () {
    let suspectThree = 'Colonel Mustard';
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
// suspectThree = Colonel Mustard as using new variable in scope of function declareAllSuspects
console.log(`Suspect three is ${suspectThree}.`);
// Mrs Peackock as using the outer most instance of suspectThree, which was unchanged 

// EPISODE 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function (newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function () {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);
// REVOLVER  as const properties can be changed.

// EPISODE 6

let murderer = 'Colonel Mustard';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        murderer = 'Mrs. White';
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
//MRS White - plot twists gets called and murderer gets reasigned

//EPISODE 7

let murderer = 'Professor Plum';

const changeMurderer = function () {
    murderer = 'Mr. Green';

    const plotTwist = function () {
        let murderer = 'Colonel Mustard';

        const unexpectedOutcome = function () {
            murderer = 'Miss Scarlet';
        }

        unexpectedOutcome();
    }

    plotTwist();
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// MR GREEN - changeMurderer reasings murderer, plotTwist creates a new variable in 
//   block scope that gets changed, but not the outer where the murderer is read

// EPISODE 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};

const changeScenario = function () {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';

    const plotTwist = function (room) {
        if (scenario.room === room) {
            scenario.murderer = 'Colonel Mustard';
        }

        const unexpectedOutcome = function (murderer) {
            if (scenario.murderer === murderer) {
                scenario.weapon = 'Candle Stick';
            }
        }

        unexpectedOutcome('Colonel Mustard');
    }

    plotTwist('Dining Room');
}

const declareWeapon = function () {
    return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);
//Candle Stick - plotTwist changes murderer to Colonel Mustard, unexpectedOutcome changes weapon to Candle Stick

// EPISODE 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);
// Professor Plum as the if statement creates a new variable that is only valid inside the if statement.