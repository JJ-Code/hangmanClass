const tee2 = () => {
    console.log(arrWordsDB);
}


//fetch GET async 
const getAllWords = async () => {
    let arrWordsDBk;
    const urlToFetch = "/api/words";
    try {
        const res = await fetch(urlToFetch);
        if (res.ok) {
            console.log(res);
            //code to excute with json res 
            const result = await res.json();
            console.log(result[0].word_selected);
            arrWordsDBk = result.map((value) => {
                //console.log(value.word_selected)
                return value.word_selected
            }); //end of arrWordsDBK
            console.log(arrWordsDBk);
            const randIndex = Math.floor(Math.random() * arrWordsDBk.length);
            const shuffle = arrWordsDBk[randIndex]
            console.log(shuffle);
            tee2();
            return arrWordsDBk;
        } else {
            throw new Error('Request Failed!');
        } //end of else

    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch

}






//let arrWordsDB;

// const getAllWords = () => {
//     let arrWordsDBk;
//     fetch("/api/words").then(response => response.json())
//         .then((result) => {
//             console.log(result)
//             console.log(result[0].word_selected);
//             arrWordsDBk = result.map((value) => {
//                 //console.log(value.word_selected)
//                 return value.word_selected
//             });
//             console.log(arrWordsDBk);
//             const randIndex = Math.floor(Math.random() * arrWordsDBk.length);
//             const shuffle = arrWordsDBk[randIndex]
//             console.log(shuffle);
//             tee2();
//             return arrWordsDBk;

//         })

//         .catch(error => console.log('error:', error));


// } //end of getAllWords











getAllWords();


const getClue = async () => {
    choosenWord;
    console.log('CLICKED');

    console.log(choosenWord);

} //end of reset 