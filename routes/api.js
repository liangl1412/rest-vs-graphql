import express from 'express';
import { addUser, getUser, getUsers} from '../models/user';
import { addPost, getPost, getPosts } from '../models/post';
import { addComment, getComments } from '../models/comment';

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

router.get('/getUser', (req, res) => {
    getUser(req.query.id, (err, user) => {
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

router.get('/getPost', (req, res) => {
    getPost(req.query.id, (err, post) => {
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


router.post('/getComments', (req, res) => {
    let options = req.body;
    getComments(options, (err, comment) => {
        if(err){
            res.send(err);
        }
        res.json(comment);
    });
});


// router.post('/getUsers', (req, res) => {
//     let options = req.body;
//     console.log(options);
//     getUsers(options, (err, user) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(user);
//     });
// });


// router.post('/getPosts', (req, res) => {
//     let options = req.body;
//     getPosts(options, (err, post) => {
//         if(err){
//             res.send(err);
//         }
//         res.json(post);
//     });
// });

export default router;