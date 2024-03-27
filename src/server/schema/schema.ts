import User from "../models/User";
import Project from "../models/Project";
import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return User.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return Project.findById(args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
