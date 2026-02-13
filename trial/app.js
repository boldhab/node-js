const express = require('express');
const path = require('path');

const app = express();
const port=3000;



//fake database 
let posts = [
  { id: 1, title: "First Post", content: "Hello World" },
  { id: 2, title: "Second Post", content: "Express is powerful" }
];

//route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.get('/posts/:id', (req, res) => {

  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

app.get('/old-posts', (req, res) => {
  res.redirect('/posts');
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 
