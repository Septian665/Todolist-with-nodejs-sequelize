import { Sequelize } from "sequelize";
import db from '../connection.js';

const {DataTypes} = Sequelize;

const Task = db.define('tasks', {
   name: {
      type: DataTypes.STRING,
   },
   completed: {
      type: DataTypes.BOOLEAN,
      default: false
   },
}, {
   freezeTableName: true
})

export default Task;

(async()=>{
   await db.sync();
})();