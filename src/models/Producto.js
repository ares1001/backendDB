const { DataTypes } = require("sequelize");
const sequelize = require("./connect");

const Producto = sequelize.define("Producto", {
  nombre: {
    type: DataTypes.STRING,
   
    allowNull: false,
 
  },
//   codigo:{
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,

//   },
//   producto :{
//     type: DataTypes.STRING,
//     allowNull:false,
//     unique:true,
//   },
//   licencia :{
//     type: DataTypes.STRING,
//     allowNull:false,
//     unique:false,
//     unique: false,
//  },
//  descuento:{
//   type: DataTypes.STRING,
//   allowNull:true,
//   unique:false,
//  },

//  stock:{
//   type: DataTypes.NUMBER,
//   allowNull:false,


//  },
//  cuotas:{
//   type: DataTypes.NUMBER,
//   allowNull:true,
//   unique:false,


  precio: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

(async () => {
  await sequelize.sync();
})();

module.exports = Producto;