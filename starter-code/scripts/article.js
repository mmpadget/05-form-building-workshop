'use strict';

var articles = []; //eslint-disable-line

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text()); //eslint-disable-line

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';

  // REVIEW: We're passing the body into the marked.js library to format our markdown input!
  this.body = marked(this.body); //eslint-disable-line

  return template(this);
};
