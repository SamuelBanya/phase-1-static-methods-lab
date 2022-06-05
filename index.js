class Formatter {
  static capitalize(word) {
    let firstLetter = word[0];
    let restOfWord = word[1, word.length];
    let capitalizedWord = firstLetter + restOfWord;

    console.log(`firstLetter: ${firstLetter}`);
    console.log(`restOfWord: ${restOfWord}`);

    return capitalizedWord;
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9]+/g, "");
  }

  static titleize(sentence) {
    sentence = this.sentence.split(" ");
    let titleizeSentenceArray = [];
    let avoidWordsArray = ["a", "an", "but", "of", "and", "for", "at", "by", "from"];
    sentence.forEach((word) => {
      if (!word in avoidWordsArray) {
        let uppercaseWord = word[0].toUpperCase() + word[1, word.length];
        titleizeSentenceArray.push(uppercaseWord);
        titleizeSentenceArray.push(" ");
      } else {
        titleizeSentenceArray.push(word);
        titleizeSentenceArray.push(" ");
      }
    });

    console.log(`titleizeSentenceArray: ${titleizeSentenceArray}`);

    return titleizeSentenceArray;
  }
}

console.log(`Formatter.capitalize("dog"): ${Formatter.capitalize("dog")}`);
