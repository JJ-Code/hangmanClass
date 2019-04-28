//const Guess = require("../js/game11");
//var ArrWords = require("./words.js");
// console.log(Words);

//import ArrWords from "./words"
//import words from 'words';
//console.log(ArrWords);
const arrWords = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Fight Club",
    "The Lord of the Rings",
    "Forrest Gump",
    "The Empire Strikes Back",
    "Inception",
    "The Lord of the Rings",
    "One Flew Over the Cuckoo's Nest",
    "Goodfellas",
    "The Matrix",
    "Seven Samurai",
    "Star Wars A New Hope",
    "City of God",
    "The Silence of the Lambs",
    "It's a Wonderful Life",
    "Life Is Beautiful",
    "The Usual Suspects",
    "Léon: The Professional",
    "Saving Private Ryan",
    "Spirited Away",
    "American History X",
    "Once Upon a Time in the West",
    "Interstellar",
    "Psycho",
    "The Green Mile",
    "Casablanca",
    "City Lights",
    "The Intouchables",
    "Modern Times",
    "Raiders of the Lost Ark",
    "The Pianist",
    "The Departed",
    "Rear Window",
    "Terminator 2: Judgment Day",
    "Back to the Future",
    "Whiplash",
    "Gladiator",
    "The Prestige",
    "The Lion King",
    "Memento",
    "Apocalypse Now",
    "Alien",
    "The Great Dictator",
    "Sunset Boulevard",
    "Cinema Paradiso",
    "The Lives of Others",
    "Grave of the Fireflies",
    "Paths of Glory",
    "Django Unchained",
    "The Shining",
    "WALL·E",
    "American Beauty",
    "The Dark Knight Rises",
    "Princess Mononoke",
    "Oldboy",
    "Aliens",
    "Witness for the Prosecution",
    "Once Upon a Time in America",
    "Das Boot",
    "Citizen Kane",
    "Dangal",
    "Vertigo",
    "North by Northwest",
    "Return of the Jedi",
    "Braveheart",
    "Reservoir Dogs",
    "M",
    "Requiem for a Dream",
    "Amélie",
    "Like Stars on Earth",
    "A Clockwork Orange",
    "Your Name",
    "Lawrence of Arabia",
    "Dunkirk",
    "Double Indemnity",
    "Amadeus",
    "Taxi Driver",
    "To Kill a Mockingbird",
    "Full Metal Jacket",
    "2001: A Space Odyssey",
    "Singin' in the Rain",
    "Toy Story 3",
    "The Sting",
    "Toy Story",
    "3 Idiots",
    "Bicycle Thieves",
    "Inglourious Basterds",
    "The Kid",
    "Snatch",
    "Monty Python and the Holy Grail",
    "Good Will Hunting",
    "For a Few Dollars More",
    "The Hunt",
    "L.A. Confidential",
    "Scarface",
    "The Apartment",
    "Metropolis",
    "Rashomon",
    "A Separation",
    "Indiana Jones",
    "My Father and My Son",
    "Yojimbo",
    "All About Eve",
    "Up",
    "Batman Begins",
    "Some Like It Hot",
    "Unforgiven",
    "Downfall",
    "Die Hard",
    "Raging Bull",
    "Heat",
    "Children of Heaven",
    "The Third Man",
    "The Great Escape",
    "Chinatown",
    "Ikiru",
    "Pan's Labyrinth",
    "My Neighbor Totoro",
    "Ran",
    "The Gold Rush",
    "Inside Out",
    "Incendies",
    "The Secret in Their Eyes",
    "On the Waterfront",
    "Judgment at Nuremberg",
    "The Bridge on the River Kwai",
    "Howl's Moving Castle",
    "Room",
    "Blade Runner",
    "The Seventh Seal",
    "Mr. Smith Goes to Washington",
    "Casino",
    "A Beautiful Mind",
    "The Elephant Man",
    "Wild Strawberries",
    "V for Vendetta",
    "The Wolf of Wall Street",
    "The General",
    "Warrior",
    "Trainspotting",
    "Dial M for Murder",
    "Andrei Rublev",
    "Gran Torino",
    "Sunrise",
    "Gone with the Wind",
    "The Deer Hunter",
    "The Bandit",
    "Fargo",
    "The Sixth Sense",
    "La La Land",
    "The Thing",
    "The Big Lebowski",
    "No Country for Old Men",
    "Finding Nemo",
    "Tokyo Story",
    "Hacksaw Ridge",
    "Cool Hand Luke",
    "There Will Be Blood",
    "Rebecca",
    "Come and See",
    "Rang De Basanti",
    "The Passion of Joan of Arc",
    "Kill Bill: Vol. 1",
    "How to Train Your Dragon",
    "Logan",
    "Mary and Max",
    "Gone Girl",
    "Into the Wild",
    "Shutter Island",
    "A Wednesday",
    "It Happened One Night",
    "Life of Brian",
    "Wild Tales",
    "Platoon",
    "The Wages of Fear",
    "Hotel Rwanda",
    "Network",
    "Rush",
    "In the Name of the Father",
    "Stand by Me",
    "Persona",
    "The 400 Blows",
    "Ben-Hur",
    "The Grand Budapest Hotel",
    "12 Years a Slave",
    "Mad Max: Fury Road",
    "Memories of Murder",
    "Spotlight",
    "Million Dollar Baby",
    "Jurassic Park",
    "Stalker",
    "Amores Perros",
    "The Truman Show",
    "The Maltese Falcon",
    "Hachi: A Dog's Tale",
    "Paper Moon",
    "The Princess Bride",
    "The Nights of Cabiria",
    "Before Sunrise",
    "Munna Bhai M.B.B.S.",
    "Prisoners",
    "Harry Potter",
    "The Grapes of Wrath",
    "Rocky",
    "Catch Me If You Can",
    "Diabolique",
    "Touch of Evil",
    "Gandhi",
    "Star Wars: The Force Awakens",
    "Donnie Darko",
    "Monsters, Inc.",
    "Annie Hall",
    "The Terminator",
    "Barry Lyndon",
    "The Bourne Ultimatum",
    "Sholay",
    "The Wizard of Oz",
    "Groundhog Day",
    "La Haine",
    "Twelve Monkeys",
    "The Best Years of Our Lives",
    "Infernal Affairs",
    "Paris, Texas",
    "The Help",
    "In the Mood for Love",
    "Beauty and the Beast",
    "The Battle of Algiers",
    "Dog Day Afternoon",
    "Pirates of the Caribbean",
    "Gangs of Wasseypur",
    "The Handmaiden",
];

// Game play variables
let wordToPlay;
let choosenWord;
let wins = 0;
let losses = 0;


class Hangman {
    constructor(word) {
        this._word = word;
        this._lettersSplit = []; //[a, p, p, l, e]
        this._lengthWord = 0;
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
    };//end of func

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


    // correctLetterIndex() {
    //     //The letIndex creates a new array of all the index values for that correct letter 
    //     const letIndex = this._lettersSplit.map((obj, i) => obj.letter === this._letterGuess ? i : -1).filter(index => index !== -1);
    //     console.log(this._letterGuess)

    //     console.log(letIndex)

    //     //this is dynamically updating the DOM and not the object with the image
    //     for (let i = 0; i < letIndex.length; i++) {
    //         // const element = letIndex[i];
    //         // console.log("hi " + element);

    //         //find and replace letter 
    //         let updateCorrectGuess = document.querySelector(`#word-to-guess > img[data-id='${letIndex[i]}']`);
    //         console.log(updateCorrectGuess);
    //         updateCorrectGuess.src = `images/${this._lettersSplit[letIndex[i]].letter}-title.jpg`
    //     } //end of forloop 


    //     //update guessedYet to true 
    //     const updateGuessed2Yes = letIndex.map((value) => {
    //         //console.log(value)
    //         this._lettersSplit[value].guessedYet = true;
    //         console.log(this._lettersSplit[value].guessedYet);
    //         return this._lettersSplit[value].guessedYet
    //     })
    //     //console.log(updateGuessed2Yes)

    //     this.checkIfAllLetterGussed();

    //     //remove guessed letter from avaliable guesses   
    //     let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
    //     console.log(parentEl);
    //     parentEl.remove();
    // }; //end of func

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

const randomChoice = arr => {
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
};

//Grab word to play words.js at the same time
const getWordToGuess = () => {
    //const word = 'Soda One'
    choosenWord = randomChoice(arrWords);
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
    if (choosenWord.getEndGame === true && choosenWord.getLives === 0) {
        losses++;
        alert("You did not win, loser!");
        document.querySelector(".loss-score").innerHTML = losses;
    } //end of if - this will let users know if they lost 
    else if (choosenWord.getEndGame === true) {
        wins++;
        alert("You win!");
        document.querySelector(".win-score").innerHTML = wins;
    } //end of else if - this will let users know if they won 
};

//Create event listener for titles 
const getClickLetter = () => {
    let abcTileDiv = document.querySelector("#abc-tiles");
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


const reset = async () => {
    choosenWord;
    const wrongDivClear = document.getElementById('wrong-tiles');
    const abcDivClear = document.getElementById('abc-tiles');
    const guessDivClear = document.getElementById('word-to-guess')
    wrongDivClear.innerHTML = "";
    abcDivClear.innerHTML = "";
    guessDivClear.innerHTML = "";
    //invoke play game again 
    play();
} //end of reset 

const play = () => {
    getWordToGuess();
    makeObj();
    makeTiles(makeObj());

}


//invoke the makeTiles function. makeTiles takes a callback of a function as a argument 
play();
//Have to invoke after the tiles are created. This need to be independent after the game play. 
getClickLetter();