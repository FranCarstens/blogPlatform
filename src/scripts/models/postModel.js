import Backbone from 'backbone'

export const BlogModel = Backbone.Model.extend({
	urlRoot: '/api/blog',
	idAttribute: '_id'
})

export const BlogCollection = Backbone.Collection.extend({
	url: '/api/blog',
	model: BlogModel
})