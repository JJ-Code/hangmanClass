//const Airplane = require('./word.js');

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
    alert('already guess that')
  } //end of if 

  console.log(checkYorN);

};




// const alreadyGuessCheck = () => {
//   let checkYorN = guessArray.findIndex(guessArrayItem => {
//     console.log(cliLetObj.clickedLetter);
    
//     console.log(guessArrayItem === cliLetObj.clickedLetter)
//     return guessArrayItem === cliLetObj.clickedLetter
//   }) //end ofcheckYorN
//   console.log(checkYorN);


//   //check if clickedLetter has a index of -1 in guessArray if it does then it has Not been gussed
//   if (checkYorN === -1) {
//     guessArray.push(cliLetObj)
//     //console.log(guessArray);
//     console.log("not in guessArray");
//     correctLetterCheck()
//   } else {
//     --numberOfLives;//decrease number of tries 
//     console.log(numberOfLives)
//     console.log(guessArray);
//     alert('already guess that')
//   } //end of if 


// }

//If letter has not been guessed 
const correctLetterCheck = () => {
  console.log('Yes correct letter check');

  // wordSplitObj.forEach(function (element) {
  //   console.log(element);
  // });

  console.log(wordSplitObj[0].letter)
  
  let correctYorN = wordSplitObj.map(e => e.letter).findIndex(letter => {
    console.log(letter === cliLetObj.clickedLetter)
    return letter === cliLetObj.clickedLetter
  }) //end
  
  

  //correctYorN has index of -1 this mean it is not a letter in the word 
  if (correctYorN === -1) {

    alert('wrong')
  } else {
    correctLetterIndex();
  } //end of if 
  console.log(correctYorN);
}//end






const correctLetterIndex = () => {
  const letIndex = letterSplit.map((letter, i) => letter === cliLetObj.clickedLetter ? i : -1).filter(index => index !== -1);
  //console.log(letterSplit);
  console.log(letIndex)
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
      alreadyGuessed: false,        
      guessCorrect: false,
      src: `images/${clickedLetter}-title.jpg`
    }//end of obj

    console.log(cliLetObj);
    

    alreadyGuessCheck() //mouse object location in array
  }); //end of click listner 


}; //END of Gameplay


//getClickLetter();

//------------------------------------

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

makeBlank(wordSplitObj);


console.log(wordSplitObj);