const mongoose = require("mongoose");

exports.DB = () => {
  mongoose
    .connect(process.env.MONGOURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => console.log("mongoDB connected..."))
    .catch((err) => console.log(err));
};
