import { Link } from "react-router-dom";

const Post = ({ post, toggleHandler, forSinglePage }) => {
  return (
    <ul className="post">
      <li>
        <h1>{post.title}</h1>
        <img src={forSinglePage ? `.${post.img}` : post.img} alt="" />
        <p>description</p>
        <div>
          <i
            className={`fa fa-heart  ${post.isLiked && "red"}`}
            onClick={() => toggleHandler(post.id)}
          ></i>
          {!forSinglePage && (
            <Link to={`/singe-post/${post.id}`}>
              <i className="fa  fa-comment"></i>
            </Link>
          )}
        </div>
      </li>
    </ul>
  );
};

export default Post;
