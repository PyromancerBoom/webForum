package internal

import (
	"github.com/PyromancerBoom/webForum/internal/controllers"
	"github.com/gin-gonic/gin"
	"github.com/rs/cors"
)

func SetupRouter() *gin.Engine {
	router := gin.Default()

	corsMiddleware := cors.AllowAll()

	router.Use(func(c *gin.Context) {
		corsMiddleware.HandlerFunc(c.Writer, c.Request)
		c.Next()
	})

	router.GET("/hi", controllers.Hi)
	router.GET("/posts", controllers.GetPosts)
	router.POST("/posts", controllers.CreatePost)
	return router
}
