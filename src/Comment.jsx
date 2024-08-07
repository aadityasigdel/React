import React, { useState, useEffect } from "react";

const Reviews = () => {
    const [reviewt, setReviewt] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch("http://localhost:3000/reviews");
            const data = await response.json();
            setReviewt(data);
        };
        fetchReviews();
    }, []);
    const [proImag, setproImag] = useState([]);

    useEffect(() => {
        const fetchproImag = async () => {
            const response = await fetch("http://localhost:3000/users");
            const data = await response.json();
            setproImag(data);
        };
        fetchproImag();
    }, []);


    return (
            <div> 
                {reviewt.map((review) => (
                    <div key={review.id}>
            {proImag.map((items) => (
                <div
                className="flex flex-col bg-gradient-to-r from-blue-50 to-white shadow-xl rounded-xl overflow-hidden m-6 p-6 transition-transform transform hover:scale-105"
            >
                <div className="flex-shrink-0" key={items.id}>
                    <img
                        src={items.image}
                        className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-blue-500 to-teal-500 object-cover shadow-lg"
                    />
                </div>
            
            <div>
                    <div className="ml-6 flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-2xl font-bold text-gray-800">
                                {review.user}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {new Date(review.date).toLocaleDateString()}
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-base text-gray-800">
                                <strong className="text-blue-600">
                                    Rating:
                                </strong>{" "}
                                {review.rating} / 5
                            </p>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {review.comment}
                        </p>
                    </div>
                </div>
        </div>
                    ))}
    </div>
            ))}
        </div>
    );
};

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
    };

    return (
        <div className="w-11/12">
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
                    
                    <ul key={index} className="w-full mt-5 shadow-md bg-gray-50 h-40 shadow-gray flex m-6 p-6 ">
                        <div className="flex-shrink-0">
                            <li>
                                <img src="src\assets\userProfile.jpg" alt=""
                                className="w-16 h-16 rounded-full border-4 border-gradient-to-r from-blue-500 to-teal-500 object-cover shadow-lg" />
                            </li>
                        </div>
                        <div className="ml-6 flex-1 space-y-2 space-x-2">
                            <li className="text-2xl font-bold text-gray-800">
                                username
                            </li>
                            <li className="text-blue-600 font-semibold " >
                                Rating:
                            </li>
                            <li className="text-lg text-gray-700 leading-relaxed">
                            {comment}
                            </li>
                        </div>
                    </ul>
                ))}
            </ul>
            <Reviews />
        </div>
    );
};

export default Comment;
