// Game play variables
let choosenWord;
let wins = 0;
let losses = 0;
let theClock;


const wordsToGuess = () => {
    console.log('you first');
    fetch("/api/words").then(response => response.json())
        .then((result) => {
            //console.log(result)
            arrWordsDB = result.map((value) => {
                //console.log(value.word_selected)
                return value.word_selected
            });
            //console.log(arrWordsDB);
            const randIndex = Math.floor(Math.random() * arrWordsDB.length);
            const shuffleWord = arrWordsDB[randIndex]
            //console.log(shuffleWord);
            choosenWord = shuffleWord;
            console.log(choosenWord);
            getWordToGuess();
            return choosenWord;
        }).catch(error => console.log('error:', error));
} //end of getAllWords

class Hangman {
    constructor(word) {
        this._word = word;
        this._lettersSplit = []; //[a, p, p, l, e]
        this._isNotSpace = /^[a-zA-Z]*$/;
        this._numberOfLives = 5;
        this._endGame = false;
    }

    get word() {
        return this._word;
    }

    get letters() {
        return this._lettersSplit;
    }

    get getEndGame() {
        return this._endGame;
    }

    get getLives() {
        return this._numberOfLives;
    }

    setEndGame() {
        return this._endGame = true;
    }

    wordToLetters() {
        let wordArray = this._word.split("")
        console.log(wordArray)
        let letterInc = 0;
        let wordObj;

        for (let i = 0; i < wordArray.length; i++) {
            let notSpace = this._isNotSpace.test(wordArray[i])
            if (notSpace === true) {
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
        //let gameArray = [];
        for (let i = 0; i < this._lettersSplit.length; i++) {
            let notSpace = this._isNotSpace.test(this._lettersSplit[i].letter)

            if (notSpace === true) {
                //let wordsGame = "_"
                //gameArray.push(wordsGame)
                const blankImage = document.createElement("img");
                blankImage.src = `images/blank-title.jpg`;
                blankImage.setAttribute("data-letter", "blank");
                blankImage.setAttribute("data-id", `${this._lettersSplit[i].letterIndex}`);
                blankImage.classList.add("blank-letter", "letter");
                guessDiv.appendChild(blankImage);
                //console.log("_")
            } else if (notSpace === false) {
                //let wordsGameBlank = " "
                //gameArray.push(wordsGameBlank)
                const blankSpace = document.createElement("div");
                blankSpace.setAttribute("id", "blank-space");
                blankSpace.setAttribute("data-id", `${this._lettersSplit[i].letterIndex}`);
                blankSpace.classList.add("blank-letter", "letter");
                guessDiv.appendChild(blankSpace);
            } //end of if

        } //end of for
        //console.log(gameArray)
    } //end of guessWB

} //end of hangman



class Guess extends Hangman {
    constructor(word) {
        super(word);
        this._letterGuess = ""; //a
        this._guessArray = [];
        this._letIndexArr;
    }

    get guesses() {
        return this._guesses;
    }

    get guessArray() {
        return this._guessArray;
    }

    resetGuessArr() {
        return this._guessArray = [];
    }

    setGuess(value) {
        return this._letterGuess = value;
    }

    alreadyGuessCheck() {

        let checkYorN = this._guessArray.findIndex(guessArrayItem => {
            console.log(guessArrayItem === this._letterGuess) //aka clickedLetter
            return guessArrayItem === this._letterGuess
        }) //end ofcheckYorN

        //console.log(checkYorN);

        //check if this._letterGuess has a index of -1 in guessArray if it does then it has Not been gussed
        if (checkYorN === -1) {
            this._guessArray.push(this._letterGuess)
            console.log(this._guessArray);
            console.log("not in guessArray");
            this.correctLetterCheck()
        } //end of if 
        //else statement should not fire
        else {
            --this._numberOfLives; //decrease number of lives  
            document.querySelector(".lives-score").innerHTML = this.getLives;
            console.log(this._numberOfLives)
            console.log(this._guessArray);
            if (this._numberOfLives === 0) {
                this.setEndGame();
            } else {
                //console.log(this._guessArray);
                alert('You have already guess that. Try again!')
            } //end of inner if 
        } //end of else  

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
            document.querySelector(".lives-score").innerHTML = this.getLives;
            console.log(this._numberOfLives);

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

            //check to see if you have loss game 
            if (this._numberOfLives === 0) {
                this.setEndGame();
            } //end of inner if 

        } else {
            //if letter is in array invoke this
            this.correctLetterIndex();
            this.updateCorrect2DOM();
            this.updateGuessed2Yes();
        } //end of if 
        console.log(correctYorN);
    } //end

    correctLetterIndex() {
        //The letIndex creates a new array of all the index values for that correct letter 
        const letIndex = this._lettersSplit.map((obj, i) => obj.letter === this._letterGuess ? i : -1).filter(index => index !== -1);
        console.log(this._letterGuess)
        console.log(letIndex)
        return this._letIndexArr = letIndex;
    } //end of func

    updateCorrect2DOM() {
        //this is dynamically updating the DOM and not the object with the image
        for (let i = 0; i < this._letIndexArr.length; i++) {
            //find and replace letter 
            let updateCorrectGuess = document.querySelector(`#word-to-guess > img[data-id='${this._letIndexArr[i]}']`);
            console.log(updateCorrectGuess);
            updateCorrectGuess.src = `images/${this._lettersSplit[this._letIndexArr[i]].letter}-title.jpg`
        } //end of forloop 
        //remove guessed letter from avaliable guesses   
        let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
        console.log(parentEl);
        parentEl.remove();
    }; //end of func

    //update guessedYet to true 
    updateGuessed2Yes() {
        this._letIndexArr.map((value) => {
            //console.log(value)
            this._lettersSplit[value].guessedYet = true;
            console.log(this._lettersSplit[value].guessedYet);
            this.checkIfAllLetterGussed();
            return this._lettersSplit[value].guessedYet
        });
    }; //end of func

    checkIfAllLetterGussed() {
        const allLettersGuessed = this._lettersSplit.every(index => index.guessedYet === true);
        console.log(allLettersGuessed);
        if (allLettersGuessed === true) {
            this.setEndGame();
        } //end of if 
    } //end of check 
} //End of Guess class 



//------------

//Connect the alphabet to the image tiles
const makeObj = () => {
    let letObjArr = [];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    for (let i = 0; i < alphabet.length; i++) {
        let abcPic = `images/${alphabet[i]}-title.jpg`;
        tileObj = {
            letter: alphabet[i],
            src: abcPic
        }
        letObjArr.push(tileObj);
        //console.log(tileObj)
    } //end of forloop
    return letObjArr
} //close of makeObj 


//Make the alphabet image board 
const makeTiles = (funcArr) => {
    let abcDiv = document.getElementById('abc-tiles');
    //console.log(funcArr)
    //shuffling thru the array to make ABC tiles random 
    let randomFunArr = funcArr.map((a) => ({
            sort: Math.random(),
            value: a
        }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    console.log(randomFunArr)

    for (let i = 0; i < randomFunArr.length; i++) {
        const abcImage = document.createElement("img");
        abcImage.src = randomFunArr[i].src;
        abcImage.setAttribute("data-letter", randomFunArr[i].letter);
        abcImage.classList.add("letter");
        abcDiv.appendChild(abcImage);
    }
}; //end of makeTiles


//Grab word to play words.js at the same time
const getWordToGuess = () => {
    //const word = 'Soda One'
    //invoking database request. it will return a array of obj and randomChoice will get random word from array 
    //choosenWord = randomChoice(arrWordsDB);
    console.log(choosenWord);

    //const word = create random function to grab random word from words.js
    choosenWord = new Guess(choosenWord)
    const playGame = choosenWord.wordToLetters(choosenWord);
    document.querySelector(".lives-score").innerHTML = choosenWord.getLives;
    console.log(playGame)
    console.log(choosenWord.getLives);

    return choosenWord;
};


const winOrLoss = () => {
    const disableGame = () => {
        clearInterval(theClock);
        clearDivs();
        //This clears the abc-tile id div with the event property 
        // const clearABCdiv = event.path[1]
        // clearABCdiv.innerHTML = ""
        //Update the dom to tell user to hit the reset button 
        const domUpdateDiv = document.querySelector("#dom-update");
        domUpdateDiv.innerHTML = "Click the RESET button to play again"

        //console.log(event);
    }

    if (choosenWord.getEndGame === true && choosenWord.getLives === 0) {
        losses++;
        alert("You did not win, loser!");
        document.querySelector(".loss-score").innerHTML = losses;
        disableGame();

    } //end of if - this will let users know if they lost 
    else if (choosenWord.getEndGame === true) {
        wins++;
        alert("You win!");
        document.querySelector(".win-score").innerHTML = wins;
        disableGame();

    } //end of else if - this will let users know if they won 
};


let abcTileDiv = document.querySelector("#abc-tiles");
//Create event listener for titles 
const getClickLetter = () => {

    console.log("hi YOU HI ");
    console.log(choosenWord);

    let clickedLetter; //get letter clicked
    abcTileDiv.addEventListener('click', function (event) {
        console.log("clicked")
        // lets you see the whole property console.log(event)
        clickedLetter = event.target.dataset.letter;
        const setGuess = choosenWord.setGuess(clickedLetter);
        console.log(setGuess);
        choosenWord.alreadyGuessCheck() //mouse object location in array
        winOrLoss(); //check if game is over 
    }); //end of click listner 

};


const timerWrapper = () => {
    const timerId = document.getElementById('timer');
    let counter = 0;
    theClock = setInterval(() => {
        if (counter >= 0) {
            counter++;
        }
        timerId.innerHTML = counter

    }, 1000);
    //console.log(theClock);
    //timerWrapper()
}

const clearDivs = () => {
    const wrongDivClear = document.getElementById('wrong-tiles');
    const abcDivClear = document.getElementById('abc-tiles');
    const guessDivClear = document.getElementById('word-to-guess')
    const clue = document.getElementById('clue-plot');
    const timerId = document.getElementById('timer');
    wrongDivClear.innerHTML = "";
    abcDivClear.innerHTML = "";
    guessDivClear.innerHTML = "";
    clue.innerHTML = "";
    timerId.innerHTML = "";
}



const play = () => {
    wordsToGuess()
    makeObj();
    makeTiles(makeObj());
    timerWrapper()
}


//invoke the makeTiles function. makeTiles takes a callback of a function as a argument 
play()
//Have to invoke after the tiles are created. This need to be independent after the game play. 
getClickLetter();