// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

const obj = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
function greet(language) {
  if (Object.keys(obj).includes(language)) {// check parameter include above obj
    for (let lan in obj) {//loop for check key of object is equal to input parameters
      if (lan === language) {
        language = obj[lan];
      }
    }
  } else {
    language = obj.english;//if the input parameter not exist in the object keys
  }
  return language;
}


////////////////test/////////////

console.log(greet("english"));
console.log(greet("dutch"));
console.log(greet('IP_ADDRESS_INVALID'));