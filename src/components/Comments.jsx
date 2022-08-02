import Comment from "./Comment";

const Comments = ({ comment }) => {
  return (
    <div className="comments">
      {comment.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
