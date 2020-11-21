import mongoose from "mongoose";
import Employee from "../../../model/Employee";

export default {
  Query: {
    viewEmployee: async (_, args) => {
      try {
        const result = await Employee.find({}, {});

        console.log(result);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },
  Mutation: {
    createEmployee: async (_, args) => {
      try {
        const { name, attitude, team, birth } = args;

        const result = await Employee.create({
          name,
          attitude,
          team,
          birth,
        });

        console.log(result);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
