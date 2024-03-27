import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
import User from "../models/User";
import Project from "../models/Project";
import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(_parent) {
        return User.findById(_parent.userId);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User.find();
      },
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
      resolve() {
        return Project.find();
      },
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

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //registaration a user
    registerUser: {
      type: UserType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLString },
        password: { type: new GraphQLNonNull(GraphQLString) },
      },
      async resolve(_parent, args) {
        try {
          const existingUser = await User.findOne({ email: args.email });
          if (existingUser) {
            throw new Error("User with this email already exists.");
          }

          const hashedPassword = await bcrypt.hash(args.password, 10);

          const newUser = new User({
            name: args.name,
            email: args.email,
            phone: args.phone,
            password: hashedPassword,
          });

          const savedUser = await newUser.save();

          return savedUser;
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    },
    //TODO: login
    //TODO: add a project
    //TODO: delete a project
    //TODO: update a project
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema;
