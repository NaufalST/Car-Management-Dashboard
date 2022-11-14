import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Cars = db.define('cars',{
    name:{
        type: DataTypes.STRING 
    },
    price:{
        type: DataTypes.INTEGER
    },
    size:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.BLOB
    }
},{
    freezeTableName:true,
    timestamps: false
});

(async() => {
    await db.sync();
})();

export default Cars;


// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Cars extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Cars.init({
//     name: DataTypes.STRING,
//     price: DataTypes.INTEGER,
//     size: DataTypes.STRING,
//     photo:DataTypes.BLOB,
//   }, {
//     sequelize,
//     modelName: 'Cars',
//   });
//   return Cars;
// };