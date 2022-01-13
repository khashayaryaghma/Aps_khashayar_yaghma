// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

function aliasGen(fName, lName) {
  fName = fName[0].toUpperCase();
  lName = lName[0].toUpperCase(); //replace uppercase first character to fName and lName
  if (Object.keys(firstName).includes(fName[0])) {
    //check the first character includes the key of firstName object
    for (let fn in firstName) {
      if (fName[0] === fn) {
        //check match
        fName = firstName[fn]; //replace the value of firstName object to fName
      }
    }
  } else {
    fName = false; //if not includes fName equal false
  }
  //do above task for second parameter
  if (Object.keys(firstName).includes(lName[0])) {
    for (let ln in surname) {
      if (lName[0] === ln) {
        lName = surname[ln];
      }
    }
  } else {
    lName = false;
  }
  //at the end return result
  if (fName === false || lName === false) {
    return "Your name must start with a letter from A - Z.";
  } else {
    return fName + " " + lName;
  }
}

////////////////test//////////////////

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' /*...*/}
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" /*...*/ };

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'