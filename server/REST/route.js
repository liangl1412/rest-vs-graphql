import express from 'express';
import { addUser, getUser } from './api/user';
import { addPost, getPost } from './api/post';
import { addComment, getComment, getComments } from './api/comment';

let router = express.Router();
router.post('/user', (req, res) => {
    let user = req.body;
    addUser(user, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});

router.get('/user', (req, res) => {
    getUser(req.query.userId, (err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});


router.post('/post', (req, res) => {
    let post = req.body;
    addPost(post, (err, post) => {
        if(err){
            throw err;
        }
        res.json(post);
    });
});

router.get('/post', (req, res) => {
    getPost(req.query.postId, (err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

router.post('/comment', (req, res) => {
    let comment = req.body;
    addComment(comment, (err, comment) => {
        if(err){
            throw err;
        }
        res.json(comment);
    });
});

router.get('/comment', (req, res) => {
    getComment(req.query.postId, (err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

router.get('/postComments', (req, res) => {
    getComments({postId: req.query.postId}, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
});

export default router;