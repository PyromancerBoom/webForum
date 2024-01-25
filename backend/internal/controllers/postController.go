package controllers

import (
	"github.com/PyromancerBoom/webForum/internal/model"
	"github.com/gin-gonic/gin"
)

var posts = []model.Post{} // mock database

func GetPosts(c *gin.Context) {
	print(posts)

	c.JSON(200, posts)
}

func CreatePost(c *gin.Context) {
	var newPost model.Post
	if err := c.ShouldBindJSON(&newPost); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	posts = append(posts, newPost)
	c.JSON(200, newPost)
}
