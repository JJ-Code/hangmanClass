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





class Guess extends Hangman {
  constructor(word, guesses) {
    super(word);
    this._guesses = guesses; //a
    this._wrongLetter = [];
    this._rightLetter = [];
  }

  userGueses(guesses) {
    this._guesses = guesses;
  }

  rightLetter() {
    return lenghtofWord
    for loop["", "", "", "", ""]
    push this._rightLetter
  }


  checkGuess() {
    if (this._guesses = this._letters) {
      //for loop to identified index pt of letters then place it in the the rightletters at that index pt
      place this.letterGuess = this_rightLetter;
    } else {
      //check if it is in the array if is not then push it 
      push this.
    }

  }
}








//need to make guessArray in constructor 
// let guessArray = [];
// let numberOfLives = 10;

// const alreadyGuessCheck = () => {
//   let checkYorN = guessArray.findIndex(guessArrayItem => {
//     console.log(guessArrayItem === clickedLetter)
//     return guessArrayItem === clickedLetter
//   }) //end ofcheckYorN
//   //check if clickedLetter has a index of -1 in guessArray if it does then it has Not been gussed
//   if (checkYorN === -1) {
//     guessArray.push(clickedLetter)
//     console.log(guessArray);
//     console.log("not in guessArray");
//     correctLetterCheck()
//   } else {
//     --numberOfLives; //decrease number of tries 
//     console.log(numberOfLives)
//     console.log(guessArray);
//     alert('already guess that')
//   } //end of if 

//   console.log(checkYorN);

// };


// //If letter has not been guessed 
// const correctLetterCheck = () => {
//   console.log('Yes correct letter check');

//   let correctYorN = letterSplit.findIndex(letterSplitItem => {
//     console.log(letterSplitItem === clickedLetter)
//     return letterSplitItem === clickedLetter
//   }) //end 
//   //correctYorN has index of -1 this mean it is not a letter in the word 
//   if (correctYorN === -1) {

//     alert('wrong')
//   } else {
//     correctLetterIndex();
//   } //end of if 
//   console.log(correctYorN);
// } //end






// const correctLetterIndex = () => {
//   const letIndex = letterSplit.map((letter, i) => letter === clickedLetter ? i : -1).filter(index => index !== -1);
//   //console.log(letterSplit);
//   console.log(letIndex)
// };




// //need to make this in constructor 
// let cliLetObj;
// let clickedLetter;

// // this should return this._guess 
// const getClickLetter = () => {

//   let abcTileDiv = document.querySelector("#abc-tiles");
//   abcTileDiv.addEventListener('click', function (event) {
//     console.log("clicked")
//     console.log(event.target.dataset.letter); // lets you see the whole property console.log(event)
//     clickedLetter = event.target.dataset.letter;

//     cliLetObj = {
//       letClicked: clickedLetter,


//     } //end of obj



//     alreadyGuessCheck() //mouse object location in array
//   }); //end of click listner 


// }; //END of Gameplay


// getClickLetter();




console.log("hello you");


const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const word = "Apple Cider"
const wordSplitObj = [];
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
    //console.log(tileObj)
  }
}; //close of makeObj 
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
    //document.getElementById("giphy-view").appendChild(giphyDiv);
    //let tileLetter = `<img class="letter" src="${array[i].src}" data-letter=${array[i].letter}>`;
    //abcDiv.appendChild(tileLetter);
    //console.log(tileLetter);

    //console.log(tileObj)

  }
};
//invoke the tile for letterObj
makeTiles(letterObj);

// const wordToLetters = (value)=>{
//     let wordArray = value.split("")
//     console.log(wordArray)
//     let letterInc = 0;

//     for (let i = 0; i < wordArray.length; i++) {
//       let wordObj = {
//         letter: wordArray[i],
//         letterIndex: letterInc++,
//         src: `images/${wordArray[i]}-title.jpg`
//       }
//       wordSplitObj.push(wordObj);
//       //console.log(wordObj.letterIndex)
//     }
//     console.log(wordSplitObj)
//     getClickLetter();
//     return wordSplitObj;
//   } //end of wordToGuess


// wordToLetters(word)





// const makeBlank = (array) => {
//   let guessDiv = document.getElementById('word-to-guess');
//   console.log(array)
//   let gameArray = [];
//   const isNotSpace = /^[a-zA-Z]*$/;
//   for (let i = 0; i < array.length; i++) {
//     let wordOrSpace = isNotSpace.test(array[i].letter)

//     if (wordOrSpace === true) {
//       let wordsGame = "_"
//       gameArray.push(wordsGame)

//       const blankImage = document.createElement("img");
//       blankImage.src = `images/blank-title.jpg`;
//       blankImage.setAttribute("data-letter", "blank");
//       blankImage.classList.add("blank-letter", "letter");
//       guessDiv.appendChild(blankImage);



//     } else if (wordOrSpace === false) {
//       let wordsGameBlank = " "
//       gameArray.push(wordsGameBlank)
//       const blankSpace = document.createElement("div");
//       blankSpace.setAttribute("id", "blank-space");
//       blankSpace.classList.add("blank-letter", "letter");
//       guessDiv.appendChild(blankSpace);


//     } //end of if

//   } // end of for
//   console.log(gameArray)
// }; //end of makeBlank

// makeBlank(wordSplitObj);


// console.log(wordSplitObj);


// const nanoIndexes = letterSplit.map((letter, i) => letter === 'p' ? i : -1).filter(index => index !== -1);




//need to make guessArray in constructor 
let guessArray = [];
let numberOfLives = 10;


const alreadyGuessCheck = () => {
  let checkYorN = guessArray.findIndex(guessArrayItem => {
    console.log(guessArrayItem === cliLetObj.clickedLetter)
    return guessArrayItem === cliLetObj.clickedLetter
  }) //end ofcheckYorN
  //check if cliLetObj.clickedLetter has a index of -1 in guessArray if it does then it has Not been gussed
  if (checkYorN === -1) {
    guessArray.push(clickedLetter)
    console.log(guessArray);
    console.log("not in guessArray");
    correctLetterCheck()
  } else {
    --numberOfLives; //decrease number of tries 
    console.log(numberOfLives)
    console.log(guessArray);
    alert('You have already guess that. Try again!')
  } //end of if 

  console.log(checkYorN);

};



//If letter has not been guessed 
const correctLetterCheck = () => {
  console.log('Yes correct letter check');

  //the map creates a new array just for the wordSplitObj.letter property and then findIndex of each 
  let correctYorN = wordSplitObj.map(obj => obj.letter).findIndex(letter => {
    console.log(letter === cliLetObj.clickedLetter)
    return letter === cliLetObj.clickedLetter
  }) //end

  //correctYorN has index of -1 this mean it is not a letter in the word 
  if (correctYorN === -1) {
    //decrease lifr for wrong guess 
    --numberOfLives;

    //put wrong guess in another div 
    const wrongDiv = document.getElementById('wrong-tiles');
    const wrongImage = document.createElement("img");
    wrongImage.src = `images/${cliLetObj.clickedLetter}-title.jpg`;
    wrongImage.setAttribute("data-letter", cliLetObj.clickedLetter);
    wrongImage.classList.add("letter");
    wrongDiv.appendChild(wrongImage);

    //remove guessed letter from avaliable guesses   
    let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${cliLetObj.clickedLetter}']`);
    console.log(parentEl);

    parentEl.remove();

    //alert('wrong')
  } else {
    correctLetterIndex();
  } //end of if 
  console.log(correctYorN);
} //end




const correctLetterIndex = () => {
  console.log('hi');
  console.log(wordSplitObj);


  const letIndex = wordSplitObj.map((obj, i) => obj.letter === cliLetObj.clickedLetter ? i : -1).filter(index => index !== -1);
  console.log(cliLetObj.clickedLetter)
  //console.log(letterSplit);
  console.log(letIndex)
  for (let i = 0; i < letIndex.length; i++) {
    letIndex[i]
    // if (cliLetObj.clickedLetter === wordSplitObj[i].letter) {     }//end of if 
    const element = letIndex[i];
    console.log("hi " + element);


    console.log(wordSplitObj[i].letter);
    let parentEl = document.querySelector(`#word-to-guess > img[data-id='1']`);
    console.log(parentEl);

    //parentEl.remove();


    // const blankImage = document.createElement("img");
    // blankImage.src = `images/blank-title.jpg`;
    // blankImage.setAttribute("data-letter", "blank");
    // blankImage.setAttribute("data-id", `${element}`);
    // blankImage.classList.add("blank-letter", "letter");
    // guessDiv.appendChild(blankImage);






  } //end of forloop 

};




//need to make this in constructor 
let cliLetObj;
let clickedLetter;

// this should return this._guess 
const getClickLetter = () => {

  let abcTileDiv = document.querySelector("#abc-tiles");
  abcTileDiv.addEventListener('click', function (event) {
    console.log("clicked")
    console.log(event.target.dataset.letter); // lets you see the whole property console.log(event)
    clickedLetter = event.target.dataset.letter;

    cliLetObj = {
      clickedLetter: clickedLetter,
      // alreadyGuessed: false,        
      // guessCorrect: false,
      src: `images/${clickedLetter}-title.jpg`
    } //end of obj

    console.log(cliLetObj);


    alreadyGuessCheck() //mouse object location in array
  }); //end of click listner 


}; //END of Gameplay


//getClickLetter();

//------------------------------------





//Attempt 3

const makeBlank = (array) => {
  let guessDiv = document.getElementById('word-to-guess');
  console.log(array)
  let gameArray = [];
  const isNotSpace = /^[a-zA-Z]*$/;
  for (let i = 0; i < array.length; i++) {
    let wordOrSpace = isNotSpace.test(array[i].letter)

    if (wordOrSpace === true) {
      let wordsGame = "_"
      gameArray.push(wordsGame)

      const blankImage = document.createElement("img");
      blankImage.src = `images/blank-title.jpg`;
      blankImage.setAttribute("data-letter", "blank");
      blankImage.classList.add("blank-letter", "letter");
      guessDiv.appendChild(blankImage);



    } else if (wordOrSpace === false) {
      let wordsGameBlank = " "
      gameArray.push(wordsGameBlank)
      const blankSpace = document.createElement("div");
      blankSpace.setAttribute("id", "blank-space");
      blankSpace.classList.add("blank-letter", "letter");
      guessDiv.appendChild(blankSpace);


    } //end of if

  } // end of for
  console.log(gameArray)
}; //end of makeBlank



const wordToLetters = (value) => {
  let wordArray = value.split("")
  console.log(wordArray)
  let letterInc = 0;

  for (let i = 0; i < wordArray.length; i++) {
    let wordObj = {
      letter: wordArray[i].toLowerCase(),
      letterIndex: letterInc++,
      src: `images/${wordArray[i].toLowerCase()}-title.jpg`
    }
    wordSplitObj.push(wordObj);
    //console.log(wordObj.letterIndex)
  }
  console.log(wordSplitObj)
  getClickLetter(); //event listner issues 
  return wordSplitObj;
} //end of wordToGuess


wordToLetters(word)

makeBlank(wordSplitObj);


console.log(wordSplitObj);