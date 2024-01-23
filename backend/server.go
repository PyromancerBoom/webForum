package main

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

func main() {
	// Connect to PostgreSQL database
	db, err := sql.Open("postgres", "user=your_user password=your_password host=localhost dbname=your_database")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Create Gin router
	router := gin.Default()

	// Hi route
	router.GET("/hi", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// Start server
	router.Run(":8080")
}
