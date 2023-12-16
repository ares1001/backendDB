const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Producto = sequelize.define("Producto", {

  
  codigo:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,

  },
  nombre :{
    type: DataTypes.STRING,
    allowNull:false,
    unique:true,
  },
  licencia :{
    type: DataTypes.STRING,
    allowNull:true,
    unique:false,
    
 },
 descuento:{
  type: DataTypes.STRING,
  allowNull:true,
  unique:false,
 },

 stock:{
   type: DataTypes.INTEGER,
 },
 cuotas:{
  type: DataTypes.INTEGER,



 },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});



module.exports = Producto;