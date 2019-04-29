'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {

        // Add seeded burgers to database (note that the date needs to be manually added here)
        return queryInterface.bulkInsert('words', [{
                word_selected: "Big Mac",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "Whooper",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "Cheezburger",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "Baconator",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "Quarter Pounder",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "McRoyal",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                word_selected: "Double Double",
                clue: "YUM YUM",
                used: false,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: function (queryInterface, Sequelize) {

        // Remove the seeded burgers (note the "{truncate: true}", which resets the primary keys)
        return queryInterface.bulkDelete('words', null, {
            truncate: true
        });

    }

};