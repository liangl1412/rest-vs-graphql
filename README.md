## Run on local
- import data from `DB` folder 
- `cd server`
- `npm install` and `npm start`

## Config changes
- inside `server/index.js`
- `postId` change if you have your own data set
- `enableGraphql` toggle on and off for graphql api
```
app.get('/post', (req, res) => {
  res.render('post',{
    postId: '5dded3ab2ad8f82eb8937aab',
    enableGraphql: false
	});
});
```

## Data Schema

```
//User
email: {type: String, unique : true, required : true},
name: {type: String, required : true}

//Post
uid: {type: String, required : true},
title: {type: String, required : true}
body: {type: String, required : true}

//Comment
uid: {type: String, required : true},
postId: {type: String, required : true},
body: {type: String, required : true}
```

## Response Data

```
{
  "data": {
    "post": {
      "title": "My first post",
      "body": "Thi is chapter 1",
      "user": {
        "name": "yizhou",
        "email": "yi.zhou@xplusz.com"
      },
      "comments": [
        {
          "body": "Thi is comment 1",
          "user": {
            "_id": "5ddec9cc2ad8f82eb8937aaa",
            "name": "yizhou",
            "email": "yi.zhou@xplusz.com"
          }
        },
        {
          "body": "Thi is comment 2",
          "user": {
            "_id": "5dded33bb0023409443bdf9a",
            "name": "yizhou2",
            "email": "yi.zhou+2@xplusz.com"
          }
        },
        {
          "body": "Thi is comment 3",
          "user": {
            "_id": "5dded33bb0023409443bdf9a",
            "name": "yizhou2",
            "email": "yi.zhou+2@xplusz.com"
          }
        }
      ]
    }
  }
}
```

## Frontend compare

## Backend compare
### REST DB call
```
Mongoose: posts.findOne({ _id: ObjectId("5dded3ab2ad8f82eb8937aab") }, { projection: {} })
Mongoose: comments.find({ postId: '5dded3ab2ad8f82eb8937aab' }, { sort: { create_date: -1 }, projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5dded33bb0023409443bdf9a") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5dded33bb0023409443bdf9a") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
```
- 6 db calls

### graphql DB call
```
Mongoose: posts.findOne({ _id: ObjectId("5dded3ab2ad8f82eb8937aab") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
Mongoose: comments.find({ postId: '5dded3ab2ad8f82eb8937aab' }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5dded33bb0023409443bdf9a") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5dded33bb0023409443bdf9a") }, { projection: {} })
```
- 6 db calls, same as REST, no improvment on backend

### graphql(with dataloader) DB call - First call
```
Mongoose: posts.findOne({ _id: ObjectId("5dded3ab2ad8f82eb8937aab") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
Mongoose: comments.find({ postId: '5dded3ab2ad8f82eb8937aab' }, { projection: {} })
Mongoose: users.find({ _id: { '$in': [ ObjectId("5ddec9cc2ad8f82eb8937aaa"), ObjectId("5dded33bb0023409443bdf9a") ] } }, { projection: {} })
```
- 4 db calls, with `dataloader`, it bundle every single user call to one

graphql(with dataloader) DB call - Second call
```
Mongoose: posts.findOne({ _id: ObjectId("5dded3ab2ad8f82eb8937aab") }, { projection: {} })
Mongoose: users.findOne({ _id: ObjectId("5ddec9cc2ad8f82eb8937aaa") }, { projection: {} })
Mongoose: comments.find({ postId: '5dded3ab2ad8f82eb8937aab' }, { projection: {} })
```
- 3 db calls, with `dataloader`, on second call, it caches the `dataloader` result
- we can break cache when data changes

