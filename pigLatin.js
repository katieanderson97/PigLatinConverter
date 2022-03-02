console.log('This is a pig latin converter');


function PigLatinWord(string){
    // this looks a lot nicer when the output is lower case
    string = string.toLowerCase();

    // defining the vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let pigString = "";

    // if the first letter is a vowel, add "way"
    if (vowels.indexOf(string[0]) > -1){
        pigString = string + "-" + "way";
        return pigString;
    }
    else {
        // this gives an array of the positions of the vowels. If there is no vowels it's 0
        let firstLetter = string.match(/[aeiou]/g) || 0;
        // This gives the first vowel
        let vowel = string.indexOf(firstLetter[0]);
        // This gives a string starting from the first vowel, another string with any of the letters before the vowel, and adds "ay" to the end
        pigString = string.substring(vowel) + "-" + string.substring(0, vowel) + "ay";
        return pigString;
    }
}

// function SentenceSplitter(string){
//     let words = string.match(/\b(\w+)'?(\w+)?\b/g)
//     return words;
// }
// console.log(SentenceSplitter("This is a test, this isn't a test..."))

function PigLatinSentence(phrase){
    // this was a line I found online that splits a sentence with spaces, and leaves necessary punctuation (like ' in isn't)
    let words = phrase.match(/\b(\w+)'?(\w+)?\b/g)
    // var words = phrase.split(' '); // this line got a bit weird with punctuation

    var pigSentence = [];

    // for each word in the sentence, put it through the pig latin converter.
    for (var i = 0; i <= words.length - 1; i++) {
        pigSentence.push(PigLatinWord(words[i]));
      };
      // joins the sentence back up with individual spaces
      return pigSentence.join(' ');
}

// Test words
console.log(PigLatinWord('rhythm'));
console.log(PigLatinWord('aloha'));
console.log(PigLatinWord('accurate'));
console.log(PigLatinWord('california'));
console.log(PigLatinWord('glove'));
console.log(PigLatinSentence("This is a test... this isn't just a test"));