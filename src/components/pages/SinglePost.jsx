import { useParams } from "react-router-dom";
import data from "../Data";
import Post from "../Post";
import Comments from "../Comments";
import AddComponentsForm from "../AddComponentsForm";

const SinglePost = ({ posts, toggleHandler, AddCoomments }) => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-post">
          <Post
            post={data[id]}
            forSinglePage={true}
            toggleHandler={toggleHandler}
          />
        </div>
        <div className="comments-wrapper">
          <Comments comment={posts[id].comments} />
          <AddComponentsForm AddCoomments={AddCoomments} id={id} />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
