import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    role: String!
  }

  type SkipperSubmission {
    id: ID!
    eventId: String!
    skipper: String!
    vessel: String!
    company: String!
    description: String!
    date: String!
    time: String!
  }

  type Query {
    getUser(id: ID!): User
    getSkipperSubmissions: [SkipperSubmission]
  }

  type Mutation {
    login(email: String!, password: String!): String
    createSkipperSubmission(
      eventId: String!
      skipper: String!
      vessel: String!
      company: String!
      description: String!
      date: String!
      time: String!
    ): SkipperSubmission
  }
`;

export default typeDefs;