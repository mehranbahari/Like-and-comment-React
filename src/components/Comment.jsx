const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h3>{comment.user}</h3>
      <p>{comment.msg}</p>
    </div>
  );
};

export default Comment;
