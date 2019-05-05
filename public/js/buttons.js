let theClock

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

        			clearInterval(theClock);
    //invoke play game again 
    play();
    timerWrapper();

} //end of reset 

//let timerId = setInterval(() => alert('tick'), 2000);



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

timerWrapper()