//const Airplane = require('./word.js');

console.log("hello");


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
    //document.getElementById("giphy-view").appendChild(giphyDiv);
    //let tileLetter = `<img class="letter" src="${array[i].src}" data-letter=${array[i].letter}>`;
    //abcDiv.appendChild(tileLetter);
    //console.log(tileLetter);

    //console.log(tileObj)

  }
}
//invoke the tile for letterObj
makeTiles(letterObj);


const makeBlank = (array) => {
  let guessDiv = document.getElementById('word-to-guess');
  console.log(array)
  let gameArray = [];
  const isNotSpace = /^[a-zA-Z]*$/;
  for (let i = 0; i < array.length; i++) {
    let wordOrSpace = isNotSpace.test(array[i])

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

  }// end of for
   console.log(gameArray)
}//end of makeBlank











// const makeBlank = (array) => {
//   let guessDiv = document.getElementById('word-to-guess');
//   console.log(array)
//   for (let i = 0; i < array.length; i++) {
//     const blankImage = document.createElement("img");
//     blankImage.src = `images/blank-title.jpg`;
//     blankImage.setAttribute("data-letter", "blank");
//     blankImage.classList.add("blank-letter", "letter");
//     guessDiv.appendChild(blankImage);

//   }
// };//end of makeBlank


makeBlank(letterSplit);


// const makeSpace = (array) => {
//   let guessDiv = document.getElementById('word-to-guess');
//   console.log(array)
//   for (let i = 0; i < array.length; i++) {
//     const blankSpace = document.createElement("div");
//     blankSpace.setAttribute("id", "blank-space");
//     blankSpace.classList.add("blank-letter", "letter");
//     guessDiv.appendChild(blankSpace);

//   }
// }

// makeSpace(); 