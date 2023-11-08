import axios from 'axios';
import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]); // Initialize errors as an empty array

  const handleSubmit = () => {
    // Validate input fields and set errors as needed
    // if (!title.trim()) {
    //   setErrors([...errors, 'Title is required']);
    // } else if (title.length < 5) {
    //   setErrors([...errors, 'Title must be at least 5 characters']);
    // }

    // if (!content.trim()) {
    //   setErrors([...errors, 'Content is required']);
    // } else if (content.length < 10) {
    //   setErrors([...errors, 'Content must be at least 10 characters']);
    // }

    // If there are errors, stop the submission
    axios({
        method: "POST",
        url: "/posts",
        data: {title, content}
    }).then((res) => {
        console.log(res);
        // put into state
    })

    // If no errors, submit the form or perform other actions
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {errors.length > 0 && (
        <div>
          <p>Please fix the following errors:</p>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PostForm;