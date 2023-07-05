import User from "../models/User.js";

const getUsers = async (req, res) => {
   try {
      const response = await User.findAll();
      return res.status(200).json(response);
   } catch (error) {
      console.log(error.message)
   }
}

const storeUsers = async (req, res) => {
   try {
      const { firstName } = req.body;

      // if(!firstName) { throw { code: 400, message: 'firstname is required'}}

      const response = await User.create({
         firstName: firstName
      });

      if(!response) {
         throw {
            code: 500,
            message: 'store user failed'
         }
      }
      return res.status(201).json({
         status: true,
         message: 'success',
         data: response
      })
   } catch (error) {
      if(!error.code) {
         error.code = 500
      }
      return res.status(error.code).json({
         status:false,
         message: error.message
      })
   }
}

export { getUsers, storeUsers }