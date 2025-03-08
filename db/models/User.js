import sequelize from "../sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
  },
});

// await User.sync({ alter: true });

export default User;
