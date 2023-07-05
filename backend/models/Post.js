import { Sequelize } from "sequelize";
import db from '../connection.js';
import User from "./User.js";
import { faker } from '@faker-js/faker';

const {DataTypes} = Sequelize

const Post = db.define('posts', {
   uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
   },
   body: {
      type: DataTypes.STRING
   }
}, {
   freezeTableName: true
});

User.hasMany(Post);
Post.belongsTo(User)

export default Post;

function generateFaker(rowCount) {
   const data = []
   for (let i = 0; i < rowCount; i++) {
      const newItem = {
         uuid: faker.datatype.uuid(),
         body: faker.lorem.words(),
         createdAt: new Date(),
         updatedAt: new Date(),
         userId: 40
      }
      data.push(newItem)
   }
   return data;
}

const item = generateFaker(2);

(async ()=> {
   await db.sync()
   // .then(() => {
   //    Post.bulkCreate(item).then(() => {
   //       console.log('data successfully created');
   //    }).catch((err) => {
   //       console.log('failed to create data');
   //    console.log(err);
   //    }).finally(() => {
   //       db.close();
   //    });
   // });
})();

