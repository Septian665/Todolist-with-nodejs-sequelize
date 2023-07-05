import { Sequelize } from "sequelize";
import db from '../connection.js';
import { faker } from '@faker-js/faker';
faker.locale = 'id_ID';

const {DataTypes} = Sequelize;

const User = db.define('users', {
   firstName: {
      type: DataTypes.STRING,
    }
}, {
   freezeTableName: true
})

export default User;

function generateFaker(rowCount) {
   const data = []
   for (let i = 0; i < rowCount; i++) {
     const newItem = {
       firstName: faker.name.firstName(),
       createdAt: new Date(),
       updatedAt: new Date(),
     }
     data.push(newItem)
   }
   return data;
}

const item = generateFaker(5);

(async()=>{
   await db.sync()
      // .then(() => {
      //    User.bulkCreate(item).then(() => {
      //       console.log('firstname successfully created');
      //    }).catch((err) => {
      //       console.log('failed to create firstname');
      //    console.log(err);
      //    }).finally(() => {
      //       db.close();
      //    });
      // });
})();

