//const Guess = require("../js/game11");
//var words = require("./words.js");
// import words from "./words.js"
// import words from './words';
//console.log(words);




const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const letterObj = []; //help make letters 
const letterSplit = ["a", "p", "p", "l", "e", " ", "p", "i", "e"]
let clickedLetter; //get letter clicked



class Hangman {
    constructor(word) {
        this._word = word;
        this._lettersSplit = []; //[a, p, p, l, e]
        this._lengthWord = 0;
    }

    get word() {
        return this._word;
    }

    get letters() {
        return this._lettersSplit;
    }

    get lengthWord() {
        return this._lengthWord;
    }

    getLength() {
        return this._lengthWord = this._lettersSplit.length;
    } //end of getLength 


    wordToLetters() {
        let wordArray = this._word.split("")
        console.log(wordArray)
        let letterInc = 0;

        for (let i = 0; i < wordArray.length; i++) {
            let wordObj = {
                letter: wordArray[i].toLowerCase(),
                letterIndex: letterInc++,
                src: `images/${wordArray[i].toLowerCase()}-title.jpg`
            }
            this._lettersSplit.push(wordObj);
            //console.log(this._lettersSplit.letterIndex)
        }
        //console.log(this._lettersSplit)
        this.makeBlank(this._lettersSplit);
        return this._lettersSplit
    } //end of wordToGuess


    makeBlank() {
        let guessDiv = document.getElementById('word-to-guess');
        //isNotSpace detects if the play word is a letter or space
        const isNotSpace = /^[a-zA-Z]*$/;
        let gameArray = [];
        for (let i = 0; i < this._lettersSplit.length; i++) {
            let wordOrSpace = isNotSpace.test(this._lettersSplit[i].letter)

            if (wordOrSpace === true) {
                let wordsGame = "_"
                gameArray.push(wordsGame)

                const blankImage = document.createElement("img");
                blankImage.src = `images/blank-title.jpg`;
                blankImage.setAttribute("data-letter", "blank");
                blankImage.setAttribute("data-id", `${this._lettersSplit[i].letterIndex}`);
                blankImage.classList.add("blank-letter", "letter");
                guessDiv.appendChild(blankImage);
                //console.log("_")
            } else if (wordOrSpace === false) {
                let wordsGameBlank = " "
                gameArray.push(wordsGameBlank)
                const blankSpace = document.createElement("div");
                blankSpace.setAttribute("id", "blank-space");
                blankSpace.setAttribute("data-id", `${this._lettersSplit[i].letterIndex}`);
                blankSpace.classList.add("blank-letter", "letter");
                guessDiv.appendChild(blankSpace);
                //console.log("a" + " ")
            } //end of if

        } //end of for
        console.log(gameArray)
    } //end of guessWB

} //end of hangman



class Guess extends Hangman {
    constructor(word) {
        super(word);
        this._letterGuess = ""; //a
        this._guessArray = [];
        this._numberOfLives = 10;
    }

    get guesses() {
        return this._guesses;
    }

    get guessArray() {
        return this._guessArray;
    }

    get guessArray() {
        return this._numberOfLives;
    }

    setGuess(value) {
        return this._letterGuess = value;
    }

    alreadyGuessCheck() {
        let checkYorN = this._guessArray.findIndex(guessArrayItem => {
            console.log(guessArrayItem === this._letterGuess) //aka clickedLetter
            return guessArrayItem === this._letterGuess
        }) //end ofcheckYorN

        //check if this._letterGuess has a index of -1 in guessArray if it does then it has Not been gussed
        if (checkYorN === -1) {
            this._guessArray.push(this._letterGuess)
            console.log(this._guessArray);
            console.log("not in guessArray");
            this.correctLetterCheck()
        } else {
            --this._numberOfLives; //decrease number of tries 
            console.log(this._numberOfLives)
            console.log(this._guessArray);
            alert('You have already guess that. Try again!')
        } //end of if 

        console.log(checkYorN);

    }; //end of alreadyGuessCheck



    //If letter has not been guessed 
    correctLetterCheck() {
        console.log('Yes correct letter check');
        console.log(this._lettersSplit);
        console.log(this._letterGuess);


        //the map creates a new array just for the this._lettersSplit.letter property and then findIndex of each 
        let correctYorN = this._lettersSplit.map(obj => obj.letter).findIndex(letter => {
            console.log(letter === this._letterGuess)
            return letter === this._letterGuess
        }); //end




        //correctYorN has index of -1 this mean it is not a letter in the word 
        if (correctYorN === -1) {
            //decrease lifr for wrong guess 
            --this._numberOfLives;

            //put wrong guess in another div 
            const wrongDiv = document.getElementById('wrong-tiles');
            const wrongImage = document.createElement("img");
            wrongImage.src = `images/${this._letterGuess}-title.jpg`;
            wrongImage.setAttribute("data-letter", this._letterGuess);
            wrongImage.classList.add("letter");
            wrongDiv.appendChild(wrongImage);

            //remove guessed letter from avaliable guesses   
            let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
            console.log(parentEl);

            parentEl.remove();

            //alert('wrong')
        } else {
            this.correctLetterIndex();
        } //end of if 
        console.log(correctYorN);
    } //end


    correctLetterIndex() {
        console.log('hi');
        console.log(this._lettersSplit);

        //The letIndex creates a new array 
        const letIndex = this._lettersSplit.map((obj, i) => obj.letter === this._letterGuess ? i : -1).filter(index => index !== -1);
        console.log(this._letterGuess)
        //console.log(letterSplit);
        console.log(letIndex)
        for (let i = 0; i < letIndex.length; i++) {
            //letIndex[i]
            // if (this._letterGuess === this._lettersSplit[i].letter) {     }//end of if 
            const element = letIndex[i];
            console.log("hi " + element);

            //find and replace letter 
            console.log(this._lettersSplit[i].letter);
            let updateCorrectGuess = document.querySelector(`#word-to-guess > img[data-id='${element}']`);
            console.log(updateCorrectGuess);
            updateCorrectGuess.src = `images/${this._lettersSplit[element].letter}-title.jpg`




        } //end of forloop 

        //remove guessed letter from avaliable guesses   
        let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
        console.log(parentEl);

        parentEl.remove();

    }; //end of func

} //End of Guess class 



//------------

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
} //close of makeObj 
//invoke the object by calling alphabet
makeObj(alphabet);



//Make the alphabet image board to be clickable 
const makeTiles = (array) => {
    let abcDiv = document.getElementById('abc-tiles');
    //console.log(array)

    for (let i = 0; i < array.length; i++) {
        const abcImage = document.createElement("img");
        abcImage.src = array[i].src;
        abcImage.setAttribute("data-letter", array[i].letter);
        abcImage.classList.add("letter");
        abcDiv.appendChild(abcImage);
    }
    getClickLetter(); //have to envoke after the tiles are created 
    getWordToGuess(); // Make images clickable and grab word to play words.js at the same time
}; //end of makeTiles

var wordToPlay;
//Grab word to play words.js at the same time
const getWordToGuess = () => {
    const word = 'Apple Pie'
    //const word = create random function to grab random word from words.js
    wordToPlay = new Guess(word)
    const playGame = wordToPlay.wordToLetters(word);
    console.log(playGame)
    return wordToPlay;
};

//Create event listener for titles 
const getClickLetter = () => {
    let abcTileDiv = document.querySelector("#abc-tiles");
    abcTileDiv.addEventListener('click', function (event) {
        console.log("clicked")
        console.log(event.target.dataset.letter); // lets you see the whole property console.log(event)
        clickedLetter = event.target.dataset.letter;
        const setGuess = wordToPlay.setGuess(clickedLetter);
        console.log(clickedLetter);
        console.log(setGuess);
        wordToPlay.alreadyGuessCheck() //mouse object location in array
    }); //end of click listner 

};



//invoke the tile for letterObj
makeTiles(letterObj);