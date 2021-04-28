var Post = require("../models/post");
var Comment = require("../models/comment");
var User = require("../models/user");


var PostsController = {
  Index: function(req, res) {
    if (!req.session.user_id){
      res.redirect('/users/login')
    }
    Post.find( async function(err, posts) {
      if (err) { throw err; }
	  const user = await User.findById(req.session.user_id);
      res.render('posts/index', { posts: posts, userId: user });
    }).populate('comments');
  },
  
  New: function(req, res) {
    if (!req.session.user_id){
      res.redirect('/users/login')
    }
    res.render('posts/new', {});
  },
  Create: async function(req, res) {
    var post = new Post(req.body);
		post.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    // post.user = req.user._id;
		await post.save(function(err) {
			console.log(post)
      if (err) { throw err; }
			res.status(201).redirect("/posts");
		});
	},
	Delete: function (req, res) {
		Post.findByIdAndRemove(req.params.id, function (err) {
			if (err) {
				throw err;
			}
			res.status(201).redirect("/posts");
		});
	},

	Sort: function (req, res) {
		Post.find().sort("-createdAt").exec(function (err, posts) {
				if (err) {
					throw err;
				}
				res.render("posts/index", { posts: posts });
			});
	},

	EditPage: async function (req, res) {
		const { id } = req.params
		const post = await Post.findById(id)
		res.render("posts/edit",  { post, message: req.body.message, id: req.params.id})
	},

	Edit: function (req, res) {
		Post.findByIdAndUpdate(
			{ _id: req.params.id },
			{ $set: { message: req.body.message } }, 
			{ new: true },
			function (err) {
				if (err) {
					throw err;
				} else {
					console.log("Updated post");
					res.status(201).redirect("/posts");
				}
			}
		);
	},

	Search: async function(req, res) {
		if (!req.session.user_id){
      res.redirect('/users/login')
    }
    const postsSearch = req.query.search
    await Post.find({$text: {$search: postsSearch }}, function(err, postsSearch) {
			if (err) { 
				throw err; 
			}
			res.render("posts/search", { postsSearch: postsSearch })
		})
	},

	Comment: function (req, res) {
		Post.findById(req.params.id, (err, post) => {
			var comment = new Comment(req.body);
			comment.save((saveErr) => {
				if (saveErr) {
					throw saveErr;
				}
				post.comments.push(comment);
				post.save((postErr) => {
					if (postErr) {
						throw postErr;
					}
					res.status(201).redirect("/posts");
				});
			});
		});
	},

	DeleteComment: function(req, res) {
		var comment = Comment.findById(req.params.id)
		comment.deleteOne( function(err) {
			if (err) {
				throw err;
			}
			res.status(201).redirect('/posts');
		})
	}

};

module.exports = PostsController;
