import Backbone from 'backbone'
import _ from 'underscore'
import {BlogModel, BlogCollection} from './models/postModel'
import {CommentModel, CommentCollection} from './models/commentModel'

const Store = _.extend(Backbone.Events, {
	_data: {
		'blogRoll': new BlogCollection(),
		'blogPost': new BlogModel(),
		'blogComments:': new CommentCollection()
	},
	_getDataProp(Prop) {
		return this._data[Prop]
	},
	_getData() {
		return this._data
	},
	_emitChange() {
		this.trigger('dataChanged')
	},
	_setData(dataObj) {
		this._data = _.extend(this._data, dataObj)
		this._emitChange()
	},
	_initialize() {

	}
})

Store._initialize()
export default Store