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
    getUsersSavedBooks(username: String!): User
  }

  input UserBooks {
    username: String
    bookId: String
  }

  type Mutation {
    savedBooks(input: UserBooks): User
    deleteBook(input: UserBooks): User
  }
`;

module.exports = typeDefs;
