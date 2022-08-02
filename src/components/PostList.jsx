import Post from "./Post";

const postList = ({ posts, toggleHandler }) => {
  return (
    <div className=" posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} toggleHandler={toggleHandler} />
      ))}
    </div>
  );
};

export default postList;
