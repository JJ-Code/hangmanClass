let resultsClue;

const getClue = async () => {
    // choosenWord;
    // console.log(choosenWord._word);
    //let ttt = choosenWord._word.split(' ').join('+')

    let movie = choosenWord._word.toLowerCase().replace(/ /g, "+")
    console.log(movie);

    let clue = document.getElementById('clue-plot');
    const urlToFetch = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    //console.log(urlToFetch)
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            //console.log(response);
            //code to excute with json response 
            const jsonResponse = await response.json();
            // var results = jsonResponse.Plot;
            resultsClue = jsonResponse.Actors;
            console.log(jsonResponse)
            console.log(resultsClue)

            clue.innerHTML = resultsClue
            sendRequest();
            return resultsClue
        } else {
            throw new Error("Request Failed!");
        } //end of else 
    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch


}; //end of getClue 


const sendRequest = async () => {
    console.log(resultsClue);

    let wordSelected = choosenWord._word;
    const urlToPost = "/api/words/cluepost";
    try {
        const response = await fetch(urlToPost, {
                method: "PUT",
                body: JSON.stringify({
                    // id: 200,
                    wordSelected: wordSelected,
                    clue: resultsClue
                })
            } //end of arg obj
        ) //end of fetch
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
        throw new Error('Request failed!')

    } //end of try
    catch (error) {
        console.log(error)
    }
    //console.log(urlToPost);

}; //end of sendRequest 










//this is the onclick function is tie to the rest button - no reset() invoke needed
const reset = async () => {
    choosenWord;
    //clear the divs 
    clearDivs();
    const domUpdateDiv = document.querySelector("#dom-update");
    domUpdateDiv.innerHTML = ""
    //clear clock
    clearInterval(theClock);
    //invoke play game again 
    play();

}; //end of reset 