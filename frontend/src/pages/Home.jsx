import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/styles.module.scss';
import { PostsContext } from '../context/PostContext.jsx';

const Home = () => {
    const { posts, setPosts } = useContext(PostsContext);
    const [isLoading, setIsLoading] = useState(true);

    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`/posts/${postId}`);
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    console.error('Not Deleted');
                } else {
                    console.error('Error occurred on server. Status:', error.response.status);
                }
            } else if (error.request) {
                console.error('No response from the server.');
            } else {
                console.error('Unknown error');
            }
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true); 
            try {
                const response = await axios.get("/posts");
                setPosts(response.data);
            } finally {
                setIsLoading(false); 
            }
        };

        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <div className="spinner">
                Loading...
            </div>
        );
    }

    return (
        <div>
            <h1>Posts</h1>

            <ul className={styles.postList}>
                {posts && posts.map((post) => (
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <button onClick={() => handleDeletePost(post._id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Home;