'use strict';
const Sequelize = require('sequelize');
const moment = require("moment");

module.exports = (sequelize) => {
  class Article extends Sequelize.Model {
    publishedAt() {
        const date = moment(this.createdAt).format("MMM D, YYYY, h:mma");
        return date;
    }
    shortDescription() {
        const shortDesc = this.body.length > 200 ? this.body.substring(0, 200) + "..." : this.body;
        return shortDesc;
      }
  }
  Article.init({
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    body: Sequelize.TEXT
  }, { sequelize });

  return Article;
};