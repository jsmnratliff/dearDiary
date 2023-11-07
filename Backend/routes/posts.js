const express = ('express');
const { requireAuth } = ('../middleware/auth.js');
const { 
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
 } = '../controllers/postControllers.js';

// const router = express.Router();
// router.use(requireAuth);

router.get('/', getAllPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);

export default router;