import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import PostForm from './components/PostForm.jsx';

const App = () => {
    // const { user } = useAuthContext();

    const elements = useRoutes([
        { path: '/', 
            element: <Layout />,
            children: [
                { path: '/', element: <Home />  },
                { path: '/newPost', element: <PostForm />  },
                // { path: '/api/signup', element: !user ? <Signup /> : <Navigate to="/" /> },
                // { path: '/api/login', element: !user ? <Login /> : <Navigate to="/" /> },
            ]
        }
    ]);

    return elements;
};

export default App;