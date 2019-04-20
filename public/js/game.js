class Hangman {
  constructor(word) {
    this._word = word;
    this._letters = []; //[a, p, p, l, e]
    this._lengthWord = 0;
  }

  get word() {
    return this._word;
  }

  get letters() {
    return this._letters;
  }

  get lengthWord() {
    return this._lengthWord;
  }

  set wordToGuess(value) {
    this._word = value;
  }

  wordToLetters() {
    let wordArray = this._word.split("")
    let letters = this._letters

    for (let i = 0; i < wordArray.length; i++) {
      letters.push(wordArray[i]);
      //console.log(letters)
    }
    return this._letters
  } //end of wordToGuess


  getLength() {
    return this._lengthWord = this._letters.length;
  } //end of getLength 

  guessWordBoard() {
    const isNotSpace = /^[a-zA-Z]*$/;
    let gameArray = [];
    for (let i = 0; i < this._letters.length; i++) {
      let wordOrSpace = isNotSpace.test(this._letters[i])

      if (wordOrSpace === true) {
        let wordsGame = "_"
        gameArray.push(wordsGame)
        //console.log("_")
      } else if (wordOrSpace === false) {
        let wordsGameBlank = " "
        gameArray.push(wordsGameBlank)
        //console.log("a" + " ")
      } //end of if

    } //end of for
    console.log(gameArray)
  } //end of guessWB

} //end of hangman

const apple1 = new Hangman('apple PIE')
console.log(apple1.word)

apple1.wordToLetters();
console.log(apple1.letters)
apple1.guessWordBoard();
