import mongoose from "mongoose"; // mongoose를 사용하기 위해 import함

const Schema = mongoose.Schema;
// mongoose.Schema는 schema라는 의미
// const <--변하지 않는다는 의미  Schema <-- 객체는 대문자로 시작함

const Employee = new Schema( // Employee 라는 상수에 스키마를 만듬
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
