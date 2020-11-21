import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Employee = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attitude: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Employee`, Employee, `Employee`);
// (`별칭`, 실제 객체 , `몽고DB안에 있는 진짜 별칭스키마는 뭔데?`)
