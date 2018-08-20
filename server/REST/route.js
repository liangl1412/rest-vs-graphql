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

router.get('/user/:_id', (req, res) => {
    getUser(req.params._id, (err, user) => {
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

router.get('/post/:_id', (req, res) => {
    getPost(req.params._id, (err, post) => {
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

router.get('/comment/:_id', (req, res) => {
    getComment(req.params._id, (err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    });
});

router.get('/comments/:_id', (req, res) => {
    getComments({postId: req.params._id}, (err, comment) => {
        if (err) {
            res.send(err);
        }
        res.json(comment);
    });
});

export default router;