var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

mongoose.model('Post', PostSchema);

/* add an 'upvote()' method to the 'Posts' schemna */
PostSchema.methods.upvote =  function(cb) {
	this.upvotes += 1;
	this.save(cb);
};