import { useState } from "react";

const AddComponentsForm = ({ AddCoomments, id }) => {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (userName.trim() !== "" && comment.trim() !== "") {
      AddCoomments(id, { user: userName, msg: comment });
      setComment("");
      setUserName("");
    }
  };

  return (
    <div className="comments-form">
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="userName"
        />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="comment"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddComponentsForm;
