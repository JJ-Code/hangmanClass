//const Guess = require("../js/game11");
//var words = require("words.js");
// import words from "./words.js"
//import words from 'words';
//console.log(words);


// const b = require('./words.js')
// console.log(b);



let wordToPlay;


class Hangman {
    constructor(word) {
        this._word = word;
        this._lettersSplit = []; //[a, p, p, l, e]
        this._lengthWord = 0;
        this._isNotSpace = /^[a-zA-Z]*$/;
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

    get isNotSpace() {
        return this._isNotSpace;
    }

    getLength() {
        return this._lengthWord = this._lettersSplit.length;
    } //end of getLength 


    wordToLetters() {
        let wordArray = this._word.split("")
        console.log(wordArray)
        let letterInc = 0;
        let wordObj;

        for (let i = 0; i < wordArray.length; i++) {
            let wordOrSpace = this._isNotSpace.test(wordArray[i])

            if (wordOrSpace === true) {
                wordObj = {
                    letter: wordArray[i].toLowerCase(),
                    letterIndex: letterInc++,
                    guessedYet: false,
                    src: `images/${wordArray[i].toLowerCase()}-title.jpg`
                };

            } //end of if 
            else {
                wordObj = {
                    letter: wordArray[i].toLowerCase(),
                    letterIndex: letterInc++,
                    guessedYet: true,
                };

            } //end of else 

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
        //const isNotSpace = /^[a-zA-Z]*$/;
        let gameArray = [];
        for (let i = 0; i < this._lettersSplit.length; i++) {
            let wordOrSpace = this._isNotSpace.test(this._lettersSplit[i].letter)

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
        console.log(this._lettersSplit);


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
            //if letter is in array invoke this
            this.correctLetterIndex();
        } //end of if 
        console.log(correctYorN);
    } //end


    correctLetterIndex() {
        console.log('hi');
        //console.log(this._lettersSplit[0].guessedYet = true);

        //The letIndex creates a new array 
        const letIndex = this._lettersSplit.map((obj, i) => obj.letter === this._letterGuess ? i : -1).filter(index => index !== -1);
        console.log(this._letterGuess)

        console.log(letIndex)

        //update guessedYet to true 
        const updateGuessed2Yes = letIndex.map((value, index, array) => {
            //console.log(value)
            this._lettersSplit[value].guessedYet = true;
            console.log(this._lettersSplit[value].guessedYet);
            return this._lettersSplit[value].guessedYet
        })

        //console.log(updateGuessed2Yes)
        //console.log(this._lettersSplit);
        //console.log(this._lettersSplit[0].guessedYet);

        //this is dynamically updating the DOM and not the object with the image
        for (let i = 0; i < letIndex.length; i++) {
            //letIndex[i]
            // if (this._letterGuess === this._lettersSplit[i].letter) {     }//end of if 
            // const element = letIndex[i];
            // console.log("hi " + element);

            //find and replace letter 

            //console.log(this._lettersSplit[i].letter);
            console.log("man");
            console.log(this._lettersSplit[i].letter + " " + this._lettersSplit[i].guessedYet);

            let updateCorrectGuess = document.querySelector(`#word-to-guess > img[data-id='${letIndex[i]}']`);
            console.log(updateCorrectGuess);
            updateCorrectGuess.src = `images/${this._lettersSplit[letIndex[i]].letter}-title.jpg`
        } //end of forloop 


        this.checkIfAllLetterGussed();

        //remove guessed letter from avaliable guesses   
        let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
        console.log(parentEl);
        parentEl.remove();

    }; //end of func


    checkIfAllLetterGussed() {
        //console.log(this._lettersSplit);

        const allLettersGuessed = this._lettersSplit.every(index => index.guessedYet === true);
        console.log("awesome");
        console.log(allLettersGuessed);
        //if (allLettersGuessed === true)

 
    } //end of check 




} //End of Guess class 



//------------

//Connect the alphabet to the image tiles
const makeObj = () => {
    const letObjArr = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    for (let i = 0; i < alphabet.length; i++) {
        let abcPic = `images/${alphabet[i]}-title.jpg`;
        const tileObj = {
            letter: alphabet[i],
            src: abcPic
        }
        letObjArr.push(tileObj);
        //console.log(tileObj)
    } //end of forloop
    return letObjArr
} //close of makeObj 

//invoke the function to make a obj to be use later on 
makeObj();



//Make the alphabet image board 
const makeTiles = (funcArr) => {
    let abcDiv = document.getElementById('abc-tiles');
    //console.log(funcArr)

    for (let i = 0; i < funcArr.length; i++) {
        const abcImage = document.createElement("img");
        abcImage.src = funcArr[i].src;
        abcImage.setAttribute("data-letter", funcArr[i].letter);
        abcImage.classList.add("letter");
        abcDiv.appendChild(abcImage);
    }
    getClickLetter(); //have to envoke after the tiles are created 
    getWordToGuess(); // Make images clickable and grab word to play words.js at the same time
}; //end of makeTiles


//Grab word to play words.js at the same time
const getWordToGuess = () => {
    const word = 'Soda'
    //const word = create random function to grab random word from words.js
    wordToPlay = new Guess(word)
    const playGame = wordToPlay.wordToLetters(word);

    console.log(playGame)
    //console.log(aa);

    return wordToPlay;
};

//Create event listener for titles 
const getClickLetter = () => {
    let abcTileDiv = document.querySelector("#abc-tiles");
    let clickedLetter; //get letter clicked
    abcTileDiv.addEventListener('click', function (event) {
        console.log("clicked")
        // lets you see the whole property console.log(event)
        clickedLetter = event.target.dataset.letter;
        const setGuess = wordToPlay.setGuess(clickedLetter);
        console.log(setGuess);
        wordToPlay.alreadyGuessCheck() //mouse object location in array

    }); //end of click listner 

};





//invoke the makeTiles function. makeTiles takes a callback of a function as a argument 
makeTiles(makeObj());


//Play game 