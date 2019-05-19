var db = require("../models");

module.exports = function (app) {

    app.get('/try', (req, res) => {
        res.send('hello world')

    })

    app.get("/api/words", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        console.log(req.params)
        console.log('hi there');

        //res.json(arrWords);
        //Word is the variable from the model
        db.Word.findAll({

        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });


    app.get("/api/words/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Word
        db.Word.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Word]
        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });


    // PUT route for updating posts
    app.put("/api/words/cluepost/", function (req, res) {
        // const test = res.json(req.body);
        const json = JSON.parse(req.body);
        console.log(json.clue)
        console.log(json.wordSelected)
        console.log(json);

        console.log('hi there');
        db.Word.update({
            clue: json.clue
        }, {
            where: {
                word_selected: json.wordSelected
            }
        }).then((dbWord) => {
            res.json(dbWord);
            console.log("Done");
        });
    });



    app.post("/api/Words", function (req, res) {
        db.Word.create(req.body).then(function (dbWord) {
            res.json(dbWord);
        });
    });

    app.delete("/api/Words/:id", function (req, res) {
        db.Word.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbWord) {
            res.json(dbWord);
        });
    });

}; //end of module




// // Create a new user
// User.create({
//     firstName: "Jane",
//     lastName: "Doe"
// }).then(jane => {
//     console.log("Jane's auto-generated ID:", jane.id);
// });

// // Delete everyone named "Jane"
// User.destroy({
//     where: {
//         firstName: "Jane"
//     }
// }).then(() => {
//     console.log("Done");
// });

// // Change everyone without a last name to "Doe"
// User.update({
//     lastName: "Doe"
// }, {
//     where: {
//         lastName: null
//     }
// }).then(() => {
//     console.log("Done");
// });