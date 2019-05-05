'use strict';
module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('Word', {
        word_selected: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        clue: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a todo from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our todo is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        used: {
            type: DataTypes.BOOLEAN,
            // defaultValue is a flag that defaults a new todos complete value to false if
            // it isn't supplied one
            defaultValue: false
        }
    }, {});
    //Word.associate = function (models) {
    // associations can be defined here
    //};
    return Word;
};








