const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }
type User {
  _id: ID!
  username:String!
  email:String!
  bookCount:Int
}
type Book {
  bookId:String
  authors:[String]
  title:String
  image:String
  link:String
}
input Book {
  bookId:String
  authors:[String]
  title:String
  image:String
  link:String
}
type Auth {
  token:String
  user:User
}
  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
   me:User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData:bookInput!):User
    removeBook(bookId:String!):User
  }
  
`;

module.exports = typeDefs;
