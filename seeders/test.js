const wordArr = require("./../modules/words");
console.log(wordArr);

'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        // Add seeded to database (note that the date needs to be manually added here)
        return queryInterface.bulkInsert('words', wordArr, {});
    },

    down: function (queryInterface, Sequelize) {

        // Remove the seeded (note the "{truncate: true}", which resets the primary keys)
        return queryInterface.bulkDelete('words', null, {
            truncate: true
        });

    }

};