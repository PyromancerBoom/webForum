package controllers

import "github.com/gin-gonic/gin"

func Hi(c *gin.Context) {
	c.JSON(200, gin.H{"message": "Hi! Welcome to this Forums App"})
}
