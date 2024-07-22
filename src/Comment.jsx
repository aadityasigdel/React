
import React, { useState } from "react";

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
            setComments([comments, newComment]);

    };

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="Write a Review"
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index} className="w-full mt-5 ">{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default Comment;
