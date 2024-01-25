package main

import (
	"database/sql"

	internal "github.com/PyromancerBoom/webForum/internal"

	_ "github.com/lib/pq"
)

func main() {
	// ostgreSQL database
	db, err := sql.Open("postgres", "user=dummy password=dummy host=dummy dbname=dummy")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	// Create Gin router
	router := internal.SetupRouter()

	// Start server
	router.Run("127.0.0.1:8080")
}
