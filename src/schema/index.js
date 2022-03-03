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
    id: ID
    username: String
    email: String
    password: String
    books: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    searchBooks(searchTerm: String!): [Book]
    getUsersSavedBooks(username: String!): User
  }

  input UserBooks {
    username: String
    bookId: String
  }

  input AddUserInput {
    username: String
    email: String
    Password: String
  }

  input UserLoginInput {
    email: String
    Password: String
  }

  type Mutation {
    savedBooks(input: UserBooks): User
    deleteBook(input: UserBooks): User
    addUser(input: AddUserInput!): Auth!
    loginUser(input: UserLoginInput): Auth!
  }
`;

module.exports = typeDefs;
