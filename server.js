const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const letterObj = [];
const letterSplit = ["a", "p", "p", "l", "e"]


const makeObj = () => {

  for (let i = 0; i < alphabet.length; i++) {
    let abcPic = `public/images/${alphabet[i]}-title.jpg`;
    const tileObj = {
      letter: alphabet[i],
      src: abcPic
    }

    letterObj.push(tileObj);
    console.log(tileObj)


  }
}

makeObj(alphabet);


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

makeTiles(letterObj);


const makeBlank = (array) => {
  let guessDiv = document.getElementById('word-to-guess');
  console.log(array)

  for (let i = 0; i < array.length; i++) {
    const blankImage = document.createElement("img");
    blankImage.src = `public/images/blank-title.jpg`;
    blankImage.setAttribute("data-letter", "blank");
    blankImage.classList.add("blank-letter", "letter");
    guessDiv.appendChild(blankImage);

  }
}


makeBlank(letterSplit)