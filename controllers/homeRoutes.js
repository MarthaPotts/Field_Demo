// // GET routes for posts/comments and locations for home page 
// const router = require('express').Router(); 
// const { Activity, Post, Comment }
// // cRud
// //GET all Acvitities for Home

// //GET all Posts for Thread
// router.get('/thread', async () => {
//     try {
//         const dbPostData = await Post.findAll({
//         include: [
//             {
//                 model: Comment, 
//                 attributes: [
//                     content, 
//                     post_id, 
//                     user_id
//                 ],
//             },
//         ],
//     }); 

//         const posts = dbPostData.map( (post) => 
//         post.get( {plain: true} )
//         );
    
//         res.render('thread', {
//             layout: 'index',
//             posts,
//             loggedIn: req.session.loggedIn, 
//         }); 
//     } catch (err) {
//         console.log(err); 
//         res.status(500).json(err); 
//         }
//     }); 

//Get all Comments for Thread.Post
// ->sequelize pulls in associated data 

//GET one Activity 

//GET one Post 

//GET one Comment 

//Crud
//Create new post 

//Create new comment 

//Create new Activity 

//crUd
//add comment to existing post 

//cruD 
//Delete post (and comments)

//Delete comment

//route to landing page if logged in: 
// router.get('/', withAuth, (req, res) => {
//     res.render('homepage', {
//         logged_in: req.session.logged_in
//     }); 
// }); 
//login page 
// router.get('login', (req,res) => {
//     res.render('login', {logged_in: req.session.logged_in})
// }); 
//get all posts and associated comments for activity: 
// router.get('/thread/:id', withAuth, async(req,res) => {
//     try{
//         const acivityData = await Post.findAll({
//             where: [
//                 {
//                     activity_id: req.params.id,
//                 }
//             ],
//             attributes: []
//         })
//     }
// })