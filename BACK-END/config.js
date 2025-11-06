const { Sequelize, DataTypes } = require("sequelize");


const database =  new Sequelize("sweet-sisc", "root", "", {
  dialect: "mysql",
  host: "localhost",
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamp: true,
  },
});


const gameModel = database.define("games", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    twister: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    biliard: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    catan: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    monopoly: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    activity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    remi: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    pingpong: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    airhockey: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    justdance: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    karaoke: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    sah: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    foosball: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});


module.exports = {
    database,
    gameModel
};
