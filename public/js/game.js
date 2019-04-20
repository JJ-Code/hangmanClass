console.log("hello YOU");


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const letterObj = [];
const letterSplit = ["a", "p", "p", "l", "e", " ", "p", "i", "e"]

//Connect the alphabet to the image tiles
const makeObj = () => {
  for (let i = 0; i < alphabet.length; i++) {
    let abcPic = `images/${alphabet[i]}-title.jpg`;
    const tileObj = {
      letter: alphabet[i],
      src: abcPic
    }
    letterObj.push(tileObj);
    console.log(tileObj)
  }
} //close of makeObj 
//invoke the object by calling alphabet
makeObj(alphabet);

//Make the alphabet image board to be clickable 
const makeTiles = (array) => {
  let abcDiv = document.getElementById('abc-tiles');
  console.log(array)

  for (let i = 0; i < array.length; i++) {
    const abcImage = document.createElement("img");
    abcImage.src = array[i].src;
    abcImage.setAttribute("data-letter", array[i].letter);
    abcImage.classList.add("letter");
    abcDiv.appendChild(abcImage);
  }
}
//invoke the tile for letterObj
makeTiles(letterObj);


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

    let guessDiv = document.getElementById('word-to-guess');
    //isNotSpace detects if the play word is a letter or space
    const isNotSpace = /^[a-zA-Z]*$/;
    let gameArray = [];
    for (let i = 0; i < this._letters.length; i++) {
      let wordOrSpace = isNotSpace.test(this._letters[i])

      if (wordOrSpace === true) {
        let wordsGame = "_"
        gameArray.push(wordsGame)

        const blankImage = document.createElement("img");
        blankImage.src = `images/blank-title.jpg`;
        blankImage.setAttribute("data-letter", "blank");
        blankImage.classList.add("blank-letter", "letter");
        guessDiv.appendChild(blankImage);
        //console.log("_")
      } else if (wordOrSpace === false) {
        let wordsGameBlank = " "
        gameArray.push(wordsGameBlank)
        const blankSpace = document.createElement("div");
        blankSpace.setAttribute("id", "blank-space");
        blankSpace.classList.add("blank-letter", "letter");
        guessDiv.appendChild(blankSpace);
        //console.log("a" + " ")
      } //end of if

    } //end of for
    console.log(gameArray)
  } //end of guessWB

} //end of hangman

const apple1 = new Hangman('Guitar Code')
console.log(apple1.word)

apple1.wordToLetters();
console.log(apple1.letters)
apple1.guessWordBoard();