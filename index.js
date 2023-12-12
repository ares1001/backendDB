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

const cartRoutes = require('./src/routes/cartRoutes');
app.use('/carrito',cartRoutes);

const adminProductosRoutes = require("./src/routes/admin/productosRoutes");
app.use('/admin/productos' , isLogin, adminProductosRoutes);

const shopRoutes = require('./src/routes/shopRoutes');
app.use('/shop',shopRoutes);



app.use((req, res, next) => {
  res.status(404).send(`
  <html>
    <head>
      <style>
        body { 
          color: red; 
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          flex-direction: column;
          background-color: grey;
        }
        h1 { color: blue; }
      </style>
    </head>
    <body>
      <img src="/img/branding/logo_light_horizontal.svg" alt="Logo">
      <h1>404: No se encuentra la página</h1>
      <p>Lo siento, trataremos de solucionarlo pronto</p>
    </body>
  </html>
`)});




const PORT = 3000;

app.listen(PORT,async() => {
  try {
    await sequelize.sync({ alter: true});
  } catch (error) {
    console.log(error);
  }

  console.log(`http://localhost:${PORT}`);
});

// app.listen(PORT, () => console.log(`http://localhost:${PORT}`));