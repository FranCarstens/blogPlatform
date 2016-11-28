import Backbone from 'backbone'

export const CommentModel = Backbone.Model.extend({
	urlRoot: '/api/comments',
	idAttribute: '_id'
})

export const CommentCollection = Backbone.Model.extend({
	url: '/api/comments',
	model: CommentModel
})