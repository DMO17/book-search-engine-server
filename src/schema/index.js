const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: ID
    title: String
    authors: [String]
    pageCount: Int
    imageUrl: String
    publishDate: String
    categories: [String]
    rating: Float
    previewUrl: String
    description: String
  }

  type User {
    username: String
    books: [Book]
  }

  type Query {
    searchBooks: [User]
    savedBooks(username: String!): [Book]
  }
`;

module.exports = typeDefs;
