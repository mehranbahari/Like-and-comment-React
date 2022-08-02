import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import Headers from "./components/UI/Headers";
import data from "./components/Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SinglePost from "./components/pages/SinglePost";

const App = () => {
  const [posts, setPosts] = useState(data);

  ///////////toggleLike
  const toggleHandler = (id) => {
    const newCopy = [...posts];
    newCopy[id].isLiked = !newCopy[id].isLiked;
    setPosts(newCopy);
  };

  //////addComment

  const AddCoomments = (id, comment) => {
    const newCopy = [...posts];
    newCopy[id].comments.push(comment);
    setPosts(newCopy);
  };

  ////////local Storage
    useEffect(() => {
      const savePosts = JSON.parse(localStorage.getItem("react-posts-like"));
      if (savePosts) {
        setPosts(savePosts);
      }
    }, []);

    useEffect(() => {
      console.log(posts)
      localStorage.setItem("react-posts-like", JSON.stringify(posts));
    }, [posts]);

  return (
    <div>
      <Headers />
      <Router>
        <Routes>
          <Route
            path=""
            element={<PostList posts={posts} toggleHandler={toggleHandler} />}
          />
          <Route
            path="/singe-post/:id"
            element={
              <SinglePost
                posts={posts}
                toggleHandler={toggleHandler}
                AddCoomments={AddCoomments}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
