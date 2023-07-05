import Post from "../models/Post.js";

const getPost = async(req, res) => {
   try {
      const response = await Post.findAll();
      return res.status(200).json(response);
   } catch (error) {
      console.log(error.message)
   }
}

export { getPost }