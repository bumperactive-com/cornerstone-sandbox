
//This function searches for the presence of a word within a string and adds a space before that word.
//We need this function as some of the URL parameters contain the word "and" and there needs to be a space
//added before it in order to compare and match to items in the dropdown for selection.
      
export default function addSpacingToString(string, word, value) {
    //Adds space before capitalized words -- we have the strings where each separate word is capitalized
    const newString = string.replace(/([A-Z])/g, ' $1').trim();
    //First determine if word is in string
    const wordIndex = string.indexOf(word);
    if(wordIndex !== -1) {
      return newString.substr(0, wordIndex) + value + newString.substr(wordIndex);
    } else {
      return newString;
    }
}