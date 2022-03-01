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

  type Query {
    searchBooks: [Book]
    savedBooks: [Book]
  }
`;

module.exports = typeDefs;
