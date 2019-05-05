const getClue = async () => {
    choosenWord;
    console.log(choosenWord._word);
    let movie = choosenWord._word.toLowerCase().replace(/ /g, "+")
    //let ttt = choosenWord._word.split(' ').join('+')
    console.log(movie);

    let clue = document.getElementById('clue-plot');
    console.log(choosenWord);

    const urlToFetch = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    //console.log(urlToFetch)
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            //console.log(response);
            //code to excute with json response 
            const jsonResponse = await response.json();
            // var results = jsonResponse.Plot;
            let results = jsonResponse.Actors;
            console.log(jsonResponse)
            console.log(results)

            clue.innerHTML = results

        } else {
            throw new Error("Request Failed!");
        } //end of else 
    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch


} //end of reset 




//this is the onclick function is tie to the rest button - no reset() invoke needed
const reset = async () => {
    choosenWord;
    //clear the divs 
    clearDivs();
    const domUpdateDiv = document.querySelector("#dom-update");
    domUpdateDiv.innerHTML = ""
    //invoke play game again 
    play();
} //end of reset 