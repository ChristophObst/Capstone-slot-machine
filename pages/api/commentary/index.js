import Comment from "../../../db/models/Comment";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const comments = await Comment.find();
    return response.status(200).json(comments);
  }

  if (request.method === "POST") {
    try {
      const commentData = request.body;
      const comment = new Comment(commentData);
      await comment.save();
      response.status(201).json({ status: "Comment created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
