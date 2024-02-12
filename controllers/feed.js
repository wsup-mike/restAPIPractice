exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "My first post.",
        content: "This is my first ever post using my new REST API.",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  // extract info from req body
  const title = req.body.title;
  const content = req.body.content;
  // create a new post in db
  res.status(201).json({
    message: "Post created successfully",
    post: {
      id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};
