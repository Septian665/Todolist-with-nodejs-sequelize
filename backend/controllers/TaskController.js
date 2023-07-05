import Task from "../models/Task.js";

const getTask = async (req, res) => {
   try {
      const response = await Task.findAll();
      res.status(200).json(response);
   } catch (error) {
      console.log(error.message)
   }
}

const addTask = async (req, res) => {
   try {
      const {name, completed} = req.body
      if(!name) { throw { code:429, message: 'name is required'}}
      if(!completed) { throw { code:429, message: 'completed is required'}}
      const result = await Task.create({
         name: name,
         completed: completed
      });
      return res.status(201).json({
         status: true,
         data: result
      })
   } catch (error) {
      res.status(500).json({message: error.message});
   }
}

const getTaskById = async (req, res) => {
   try {
      const taskId = req.params.id
      const dataTask = await Task.findOne({ 
         where: {
            id: taskId
         } 
      })
      if(!dataTask) { throw { code: 404, message: 'data not found'}}
      return res.status(200).json({
         status: true,
         data: dataTask
      });
   } catch (error) {
      if(!error.code) { error.code = 500 }
      
      res.status(error.code).json({
         status: false,
         message:error.message
      })
   }
}

const updateTask  = async(req, res) => {
   try {
      const taskId = req.params.id
      const dataTask = await Task.findOne({ 
         where: {
            id: taskId
         } 
      })
      if(!dataTask) { throw { code:404, message: 'data not found'}}
      
      const {name, completed} = req.body
      // if(!name) { throw { code:429, message: 'name is required'}}
      // if(!completed) { throw { code:429, message: 'completed is required'}}

      const data = {
         name: name,
         completed: completed
      }
      await Task.update(data,{
         where: {
            id: taskId
         }
      })
      res.status(200).json({
         status: true, 
         message: 'updated data successfuly',
         data: data
      });
   } catch (error) {
      if(!error.code) { error.code = 500}
      res.status(error.code).json({
         status: false,
         message: error.message
      })
   }
}

const deleteTask = async(req, res) => {
   try {
      const taskId = req.params.id
      const delTask = await Task.destroy({ 
         where: {
            id: taskId
         }
      });
      if(!delTask) { throw { code: 404, message: 'data not found'}}
      res.status(200).json({
         status:'true', 
         message: 'delete data successfuly'
      });
   } catch (error) {
      if(!error.code) { error.code = 500}
      res.status(error.code).json({
         status:false,
         message: error.message
      })
   }
}

export { getTask, addTask, getTaskById, updateTask, deleteTask }