//fetch GET
// const getForecast = async () => {
//     const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`;
//     try {
//         const res = await fetch(urlToFetch);
//         if (res.ok) {
//             console.log(res);
//             //code to excute with json res 
//             const jsonres = await res.json();
//             console.log(jsonres)
//             const days = jsonres.forecast.forecastDay;
//             return days;


//         } else {
//             throw new Error('Request Failed!');
//         } //end of else

//     } // end of try
//     catch (error) {
//         console.log(error.message)
//     } //end of catch

// }


const tee2 = () => {
    console.log(arrWordsDB);
}

//let arrWordsDB;

const getAllWords = () => {
let arrWordsDBk;
    fetch("/api/words").then(response => response.json())
        .then((result) => {
            console.log(result)
            console.log(result[0].word_selected);
            arrWordsDBk = result.map((value) => {
                //console.log(value.word_selected)
                return value.word_selected
            });
            console.log(arrWordsDBk);
            const randIndex = Math.floor(Math.random() * arrWordsDBk.length);
            const shuffle = arrWordsDBk[randIndex]
            console.log(shuffle);
            tee2();
            return arrWordsDBk;

        })

        .catch(error => console.log('error:', error));


} //end of getAllWords











getAllWords();


const getClue = async () => {
    choosenWord;
    console.log('CLICKED');

    console.log(choosenWord);

} //end of reset 
