package controllers

import "github.com/gin-gonic/gin"

func Hi(c *gin.Context) {
	c.String(200, "Hi")
}
