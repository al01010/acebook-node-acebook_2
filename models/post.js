var mongoose = require("mongoose");
var _ = require("lodash")

var PostSchema = new mongoose.Schema(
	{
		author: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		message: String,
		comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
		likes: [{ type: String }],
		images: [
			{
				url: String,
				filename: String,
			},
		],
	},
	{
		timestamps: { createdAt: true, updatedAt: true },
	}
);

PostSchema.pre('save', function (next) {
	console.log([...this.likes])
  this.likes = _.uniq(this.likes.map((like) => like.toString()));
	console.log(this.likes)
  next();
});

PostSchema.index({ "$**": "text" });

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;
