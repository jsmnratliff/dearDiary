import axios from 'axios';
import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]); // Initialize errors as an empty array

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Clear existing errors
    setErrors([]);

    // Validate input fields
    if (!title.trim()) {
      setErrors((prevErrors) => [...prevErrors, 'Title is required']);
    } else if (title.length < 5) {
      setErrors((prevErrors) => [...prevErrors, 'Title must be at least 5 characters']);
    }

    if (!content.trim()) {
      setErrors((prevErrors) => [...prevErrors, 'Content is required']);
    } else if (content.length < 10) {
      setErrors((prevErrors) => [...prevErrors, 'Content must be at least 10 characters']);
    }

    // If there are errors, stop the submission
    if (errors.length > 0) {
      return;
    }

    // If no errors, submit the form or perform other actions
    axios
      .post('/posts', { title, content })
      .then((res) => {
        console.log(res);
        // Put the response data into state or perform other actions
      })
      .catch((error) => {
        console.error('Axios error:', error);
      });
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
        <button type="submit">Submit</button>
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