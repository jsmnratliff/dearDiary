import { useContext, useEffect } from 'react';
import axios from 'axios';
import PostForm from '../components/PostForm';
import styles from '../styles/styles.module.scss';
import { PostsContext } from '../context/PostContext.jsx';

const Home = () => {
    // const { posts, dispatch } = usePostsContext();
    // const { user } = useAuthContext();
    const {posts,  setPosts } = useContext(PostsContext)

    const handleDeletePost = async (postId) => {
        try {
            await axios.delete(`/posts/${postId}`);
            setPosts((prevPosts) => prevPosts.filter((post) => post._id !== postId));
        } catch (error) {
        if (error.response) {
             if (error.response.status === 404) {
                console.error('Not Deleted');
        } else {
             console.error('Error occurred on server. Status:' , error.response.status);
        }
    } else if (error.request) {
        console.error('No response from server.');
    } else {
        console.error()
    }
    
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios({
                method: "get",
                url:"/posts"
            });

            setPosts(response.data)


        };
         fetchPosts();
    }, []);

    if (!posts) {
        return (
            <div className="spinner">
                loading...
                {/* <HashLoader
                    color="#36d7b7"
                    size={100}
                /> */}
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