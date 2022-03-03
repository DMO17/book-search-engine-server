const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const { authMiddleware } = require("./helper/authUtil");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/googleBooks", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO] : Successfully connected to db");

    const { url } = await server.listen();
    console.log(`server running at ${url}`);
  } catch (error) {
    console.log(`[ERROR] :  Connection to db has failed | ${error.message}`);
  }
};

init();
