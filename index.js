class Formatter {
  constructor() {
    this.word = word;
    this.sentence = sentence;
  }
  static capitalize(word) {
    return (word[0] + word[1, word.length]).toString();
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
