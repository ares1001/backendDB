require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const sequelize = require('./src/models/connect');
const session = require("cookie-session");


// const session = require("express-session") ;

// app.use(
//   session({
//     secret : "Milo2019",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

app.use(
  session({
    keys:["milo2019" , "Milo2020"]
  })
);

const isLogin = (req, res, next) => {
  if(!req.session.userId){
    return res.redirect("/login");
  }
  next();
}

app.set("view engine" , "ejs");
app.set("views", "./src/views");

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname + "/public")));



app.use(require("./src/routes/authRoutes"));

const mainRoutes = require('./src/routes/mainRoutes');
app.use(mainRoutes);

const adminProductosRoutes = require("./src/routes/admin/productosRoutes");
app.use('/admin/productos' , isLogin, adminProductosRoutes);


app.use((req, res, next) => {
  res.status(404).send("la pagina no existe")});




const PORT = 3000;

app.listen(PORT,async() => {
  try {
    await sequelize.authenticate()
  } catch (error) {
    console.log(error);
  }

  console.log(`http://localhost:${PORT}`);
});

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));