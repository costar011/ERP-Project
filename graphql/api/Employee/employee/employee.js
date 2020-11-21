import Employee from "../../../model/Employee"; // Employee DB를 쓰기 위해 import함

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

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    deleteEmployee: async (_, args) => {
      const { id } = args;

      try {
        const result = await Employee.deleteOne({ _id: id });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    updateEmployee: async (_, args) => {
      const { id, name, attitude, team } = args;

      try {
        const result = await Employee.updateOne(
          { _id: id },
          {
            $set: {
              name,
              attitude,
              team,
            },
          }
        );
        // find({},{특별히 조회할 애를 넣는 곳 넣을 것이 있으면 !})
        console.log(result);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
