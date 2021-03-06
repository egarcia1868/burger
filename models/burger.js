const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    console.log("made it to burger");
    orm.selectAll("burgers", res => {
      console.log("made it to burger2")
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, res => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = burger;