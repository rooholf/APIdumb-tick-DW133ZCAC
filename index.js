require("express-group-routes");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const showController = require("./controllers/_show");
const deleteController = require("./controllers/_delete");
const postController = require("./controllers/_post");
const updateController = require("./controllers/_update");
const authController = require("./controllers/_auth");

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.group("/api", router => {
  router.get("/", (req, res) => {
    res.send("hello world");
  });

  // auth endpoint
  router.post("/login", authController.login);
  router.post("/register", authController.register);

  //user endpoint
  router.get("/users", showController.showAllUser);
  router.post("/users", postController.storeUser);
  router.get("/user/:id", showController.showOneUser);
  router.patch("/user/:id", updateController.updateUser);

  //category endpoint
  router.get("/categories", showController.showAllCategories);
  router.get("/category/:id", showController.showEventOnCategory);

  //events endpoint
  router.get("/events", showController.showAllEvents);
  router.get("/event/:id", showController.showOneEvent);
  router.post("/event", postController.storeEvent);

  //order endpoint
  router.post("/order", postController.storeOrder);
  router.get("/order", showController.showAllOrder);
  router.get("/order/:id", showController.showOneOrder);
  router.patch("/order/:id", updateController.updateOrder);

  //wishlist endpoint
  router.get("/wishlist", showController.showAllWishlist);
  router.post("/wishlist", postController.storeWishlist);
  router.get("/wishlist/:id", showController.showOneWishlist);
  router.get("/wishlist/:id/user", showController.showWishlistOnUser);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
