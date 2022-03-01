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
    searchBooks(searchTerm: String!): [Book]
    savedBooks(username: String!, bookId: String!): User
  }
`;

module.exports = typeDefs;
