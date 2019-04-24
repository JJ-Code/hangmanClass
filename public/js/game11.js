console.log("hello YOU");

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

  set wordToGuess(value) {
    this._word = value;
  }


  getLength() {
    return this._lengthWord = this._lettersSplit.length;
  } //end of getLength 

  guessWordBoard() {

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



  wordToLetters() {
    let wordArray = this._word.split("")
    console.log(wordArray)
    let letterInc = 0;

    for (let i = 0; i < wordArray.length; i++) {
      let wordObj = {
        letter: wordArray[i],
        letterIndex: letterInc++,
        src: `images/${wordArray[i].toLowerCase()}-title.jpg`
      }
      this._lettersSplit.push(wordObj);
      //console.log(this._lettersSplit.letterIndex)
    }
    //console.log(this._lettersSplit)
    makeBlank(this._lettersSplit);
    return this._lettersSplit
  } //end of wordToGuess


} //end of hangman

// const apple1 = new Hangman('Guitar Hero')
// console.log(apple1.word)

// apple1.wordToLetters();
// console.log(apple1.letters)
// apple1.guessWordBoard();


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

  set setGuess(value) {
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
      correctLetterCheck()
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
      correctLetterIndex();
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

      //remove guessed letter from avaliable guesses   
      let parentEl = document.querySelector(`#abc-tiles > img[data-letter='${this._letterGuess}']`);
      console.log(parentEl);

      parentEl.remove();


    } //end of forloop 

  }; //end of func










} //End of Guess class 




export default Guess;



















// class Guess extends Hangman {
//   constructor(word, guesses) {
//     super(word);
//     this._guesses = guesses; //a
//     this._wrongLetter = [];
//     this._rightLetter = [];
//       this._numOfGuess = 10;  
//   }

//   userGueses(guesses) {
//     this._guesses = guesses;
//   }

//   rightLetter() {
//     return lenghtofWord
//     for loop["", "", "", "", ""]
//     push this._rightLetter
//   }


//   checkGuess() {
//     if (this._guesses = this._lettersSplit) {
//       //for loop to identified index pt of letters then place it in the the rightletters at that index pt
//       place this.letterGuess = this_rightLetter;
//     } else {
//       //check if it is in the array if is not then push it 
//       push this.
//     }

//   }
// }