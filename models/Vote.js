import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Vote = sequelize.define("Vote", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
	userid: {
    type: DataTypes.STRING,
		allowNull: true,
  },
  option: {
    type: DataTypes.INTEGER,
		allowNull: false,
  },
});

export default Vote;
